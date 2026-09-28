import { GridFilterType } from '@enums';
import { act, renderHook } from '@testing-library/react';
import type { GridFilterCondition, GridFilterState } from '@types';
import * as fc from 'fast-check';
import { describe, expect, it, vi } from 'vitest';

import { useGridFilter } from '../hooks/useGridFilter';

type HookResult = ReturnType<
  typeof renderHook<ReturnType<typeof useGridFilter>, unknown>
>['result'];

function seedHook(result: HookResult, state: GridFilterState): void {
  for (const [seedField, conditions] of Object.entries(state)) {
    for (const condition of conditions ?? []) {
      act(() => {
        result.current.handleApplyFilter(seedField, condition);
      });
    }
  }
}

function clearFieldViaHook(
  currentState: GridFilterState,
  field: string,
): [GridFilterState, boolean] {
  const onFilterChange = vi.fn();
  const { result } = renderHook(() => useGridFilter({ onFilterChange }));

  seedHook(result, currentState);

  const changeCallsBeforeClear = onFilterChange.mock.calls.length;

  act(() => {
    result.current.handleClearFilter(field);
  });

  const wasChanged = onFilterChange.mock.calls.length > changeCallsBeforeClear;

  return [result.current.filterState, wasChanged];
}

const filterTypeArb = fc.constantFrom(
  GridFilterType.StartsWith,
  GridFilterType.Includes,
  GridFilterType.Equals,
);

const nonBlankStringArb = fc
  .tuple(fc.string({ minLength: 1 }), fc.string())
  .map(([nonEmpty, suffix]) => {
    const hasNonWhitespace = /\S/.test(nonEmpty);
    return hasNonWhitespace ? nonEmpty + suffix : `a${nonEmpty}${suffix}`;
  })
  .filter((s) => s.trim().length > 0);

const filterConditionArb: fc.Arbitrary<GridFilterCondition> = fc.record({
  type: filterTypeArb,
  value: nonBlankStringArb,
  caseSensitive: fc.boolean(),
});

const conditionsArrayArb = fc.array(filterConditionArb, { minLength: 0, maxLength: 5 });
const nonEmptyConditionsArrayArb = fc.array(filterConditionArb, { minLength: 1, maxLength: 5 });
const fieldNames = ['name', 'age', 'email', 'status', 'country', 'active'];
const fieldNameArb = fc.constantFrom(...fieldNames);

const filterStateArb: fc.Arbitrary<GridFilterState> = fc
  .dictionary(fieldNameArb, conditionsArrayArb, { minKeys: 0, maxKeys: 5 })
  .map((dict) => dict as GridFilterState);

const nonEmptyFilterStateArb: fc.Arbitrary<GridFilterState> = fc
  .tuple(
    fieldNameArb,
    nonEmptyConditionsArrayArb,
    fc.dictionary(fieldNameArb, conditionsArrayArb, { minKeys: 0, maxKeys: 4 }),
  )
  .map(([field, conditions, rest]) => ({
    ...rest,
    [field]: conditions,
  }));

function withoutEmptyFields(state: GridFilterState): GridFilterState {
  const result: GridFilterState = {};
  for (const [field, conditions] of Object.entries(state)) {
    if (conditions?.length) {
      result[field] = conditions;
    }
  }
  return result;
}

describe('Clear behavior via useGridFilter (isolation and idempotence)', () => {
  describe("Clearing a field removes that field's conditions", () => {
    it('should remove all conditions for the specified field', () => {
      fc.assert(
        fc.property(nonEmptyFilterStateArb, fieldNameArb, (initialState, targetField) => {
          // Ensure the target field has conditions
          const stateWithTarget: GridFilterState = {
            ...initialState,
            [targetField]: initialState[targetField]?.length
              ? initialState[targetField]
              : [{ type: GridFilterType.Includes, value: 'test', caseSensitive: false }],
          };

          const [nextState] = clearFieldViaHook(stateWithTarget, targetField);

          // The target field should be undefined (removed) in the next state
          expect(nextState[targetField]).toBeUndefined();
        }),
        { numRuns: 50 },
      );
    });

    it('should report a change when clearing a field with conditions', () => {
      fc.assert(
        fc.property(nonEmptyConditionsArrayArb, fieldNameArb, (conditions, targetField) => {
          const initialState: GridFilterState = { [targetField]: conditions };

          const [nextState, wasChanged] = clearFieldViaHook(initialState, targetField);

          expect(wasChanged).toBe(true);
          expect(nextState[targetField]).toBeUndefined();
        }),
        { numRuns: 50 },
      );
    });
  });

  describe('Other columns remain unchanged', () => {
    it('should not modify conditions on other columns when clearing a specific field', () => {
      fc.assert(
        fc.property(
          filterStateArb,
          fieldNameArb,
          fieldNameArb,
          nonEmptyConditionsArrayArb,
          (baseState, targetField, otherField, targetConditions) => {
            // Skip if targetField and otherField are the same
            fc.pre(targetField !== otherField);

            // Ensure we have conditions on both fields
            const initialState: GridFilterState = {
              ...baseState,
              [targetField]: targetConditions,
              [otherField]: baseState[otherField]?.length
                ? baseState[otherField]
                : [{ type: GridFilterType.Equals, value: 'other', caseSensitive: true }],
            };

            const seeded = withoutEmptyFields(initialState);
            const [nextState] = clearFieldViaHook(initialState, targetField);

            // Other field's conditions should be exactly the same
            expect(nextState[otherField]).toEqual(seeded[otherField]);

            // All other (non-empty) keys should remain unchanged
            for (const field of Object.keys(seeded)) {
              if (field !== targetField) {
                expect(nextState[field]).toEqual(seeded[field]);
              }
            }
          },
        ),
        { numRuns: 50 },
      );
    });

    it("should preserve other columns' condition values", () => {
      fc.assert(
        fc.property(
          nonEmptyConditionsArrayArb,
          nonEmptyConditionsArrayArb,
          (targetConditions, otherConditions) => {
            const initialState: GridFilterState = {
              name: targetConditions,
              email: otherConditions,
            };

            const [nextState] = clearFieldViaHook(initialState, 'name');

            expect(nextState.email).toEqual(otherConditions);
          },
        ),
        { numRuns: 50 },
      );
    });
  });

  describe('Clearing an empty/non-existent field is a no-op', () => {
    it('should not report a change when clearing a field that does not exist', () => {
      fc.assert(
        fc.property(filterStateArb, (initialState) => {
          // Use a field name that definitely doesn't exist
          const nonExistentField = 'definitely_not_a_field_xyz_123';

          const [nextState, wasChanged] = clearFieldViaHook(initialState, nonExistentField);

          expect(wasChanged).toBe(false);
          expect(nextState[nonExistentField]).toBeUndefined();
        }),
        { numRuns: 50 },
      );
    });

    it('should not report a change when clearing a field with no seeded conditions', () => {
      fc.assert(
        fc.property(filterStateArb, fieldNameArb, (baseState, targetField) => {
          // Create a state where the target field has an empty array (never seeded)
          const initialState: GridFilterState = {
            ...baseState,
            [targetField]: [],
          };

          const [nextState, wasChanged] = clearFieldViaHook(initialState, targetField);

          expect(wasChanged).toBe(false);
          expect(nextState[targetField]).toBeUndefined();
        }),
        { numRuns: 50 },
      );
    });
  });

  describe('Clearing is idempotent (clearing twice equals clearing once)', () => {
    it('should produce the same result when clearing the same field twice', () => {
      fc.assert(
        fc.property(nonEmptyFilterStateArb, fieldNameArb, (baseState, targetField) => {
          // Ensure the target field has conditions
          const initialState: GridFilterState = {
            ...baseState,
            [targetField]: baseState[targetField]?.length
              ? baseState[targetField]
              : [{ type: GridFilterType.Includes, value: 'test', caseSensitive: false }],
          };

          const onFilterChange = vi.fn();
          const { result } = renderHook(() => useGridFilter({ onFilterChange }));

          seedHook(result, initialState);

          act(() => {
            result.current.handleClearFilter(targetField);
          });
          const afterFirstClear = result.current.filterState;

          const callsAfterFirst = onFilterChange.mock.calls.length;

          act(() => {
            result.current.handleClearFilter(targetField);
          });
          const afterSecondClear = result.current.filterState;

          // Second clear is a no-op: no additional change emitted, same result
          expect(onFilterChange.mock.calls.length).toBe(callsAfterFirst);
          expect(afterSecondClear).toEqual(afterFirstClear);
          expect(afterSecondClear[targetField]).toBeUndefined();
        }),
        { numRuns: 50 },
      );
    });

    it('should produce identical results regardless of how many times clear is called', () => {
      fc.assert(
        fc.property(
          nonEmptyFilterStateArb,
          fieldNameArb,
          fc.integer({ min: 1, max: 10 }),
          (baseState, targetField, clearCount) => {
            // Ensure the target field has conditions
            const initialState: GridFilterState = {
              ...baseState,
              [targetField]: baseState[targetField]?.length
                ? baseState[targetField]
                : [{ type: GridFilterType.StartsWith, value: 'x', caseSensitive: false }],
            };

            const [afterOneClear] = clearFieldViaHook(initialState, targetField);

            const onFilterChange = vi.fn();
            const { result } = renderHook(() => useGridFilter({ onFilterChange }));

            seedHook(result, initialState);

            // First clear mutates; the rest are no-ops. Each in its own act so
            // the committed state feeds the next call's closure.
            for (let i = 0; i < clearCount; i++) {
              act(() => {
                result.current.handleClearFilter(targetField);
              });
            }

            // All should produce the same result
            expect(result.current.filterState).toEqual(afterOneClear);
          },
        ),
        { numRuns: 50 },
      );
    });
  });

  describe('Combined isolation and idempotence properties', () => {
    it('should maintain isolation across multiple clear operations', () => {
      fc.assert(
        fc.property(
          nonEmptyConditionsArrayArb,
          nonEmptyConditionsArrayArb,
          nonEmptyConditionsArrayArb,
          (cond1, cond2, cond3) => {
            const onFilterChange = vi.fn();
            const { result } = renderHook(() => useGridFilter({ onFilterChange }));

            seedHook(result, { name: cond1, email: cond2, status: cond3 });

            act(() => {
              result.current.handleClearFilter('name');
            });

            // name should be gone, email and status should remain
            expect(result.current.filterState.name).toBeUndefined();
            expect(result.current.filterState.email).toEqual(cond2);
            expect(result.current.filterState.status).toEqual(cond3);

            act(() => {
              result.current.handleClearFilter('email');
            });

            // name and email should be gone, status should remain
            expect(result.current.filterState.name).toBeUndefined();
            expect(result.current.filterState.email).toBeUndefined();
            expect(result.current.filterState.status).toEqual(cond3);

            // Clear name again (idempotent - already cleared)
            const callsBefore = onFilterChange.mock.calls.length;
            act(() => {
              result.current.handleClearFilter('name');
            });

            // Should be a no-op: no additional change emitted
            expect(onFilterChange.mock.calls.length).toBe(callsBefore);
          },
        ),
        { numRuns: 50 },
      );
    });

    it('should correctly clear all fields in any order', () => {
      fc.assert(
        fc.property(
          nonEmptyConditionsArrayArb,
          nonEmptyConditionsArrayArb,
          fc.shuffledSubarray(['name', 'email'], { minLength: 2, maxLength: 2 }),
          (cond1, cond2, clearOrder) => {
            const { result } = renderHook(() => useGridFilter({}));

            seedHook(result, { name: cond1, email: cond2 });

            for (const field of clearOrder) {
              act(() => {
                result.current.handleClearFilter(field);
              });
            }

            // Both fields should be cleared regardless of order
            expect(result.current.filterState.name).toBeUndefined();
            expect(result.current.filterState.email).toBeUndefined();
            expect(Object.keys(result.current.filterState)).toHaveLength(0);
          },
        ),
        { numRuns: 50 },
      );
    });
  });
});
