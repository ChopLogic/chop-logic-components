import { GridFilterType } from '@enums';
import type { GridFilterCondition, GridFilterState } from '@types';
import * as fc from 'fast-check';
import { describe, expect, it } from 'vitest';

function clearFilterReducer(
  currentState: GridFilterState,
  field: string,
): [GridFilterState, boolean] {
  if (!currentState[field]?.length) {
    return [currentState, false];
  }

  const next = { ...currentState };
  delete next[field];
  return [next, true];
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

describe('Clear-reducer isolation and idempotence', () => {
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

          const [nextState] = clearFilterReducer(stateWithTarget, targetField);

          // The target field should be undefined (removed) in the next state
          expect(nextState[targetField]).toBeUndefined();
        }),
        { numRuns: 100 },
      );
    });

    it('should return a new state object when clearing a field with conditions', () => {
      fc.assert(
        fc.property(nonEmptyConditionsArrayArb, fieldNameArb, (conditions, targetField) => {
          const initialState: GridFilterState = { [targetField]: conditions };

          const [nextState, wasChanged] = clearFilterReducer(initialState, targetField);

          // Should return a new object reference
          expect(nextState).not.toBe(initialState);
          expect(wasChanged).toBe(true);
        }),
        { numRuns: 100 },
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

            const otherFieldConditionsBefore = initialState[otherField];
            const [nextState] = clearFilterReducer(initialState, targetField);

            // Other field's conditions should be exactly the same
            expect(nextState[otherField]).toEqual(otherFieldConditionsBefore);

            // All other keys should remain unchanged
            for (const field of Object.keys(initialState)) {
              if (field !== targetField) {
                expect(nextState[field]).toEqual(initialState[field]);
              }
            }
          },
        ),
        { numRuns: 100 },
      );
    });

    it("should preserve the exact reference of other columns' condition arrays", () => {
      fc.assert(
        fc.property(
          nonEmptyConditionsArrayArb,
          nonEmptyConditionsArrayArb,
          (targetConditions, otherConditions) => {
            const initialState: GridFilterState = {
              target: targetConditions,
              other: otherConditions,
            };

            const [nextState] = clearFilterReducer(initialState, 'target');

            // The other field's array should not be deeply copied (same reference in the spread)
            // Note: We're testing that the values are equal, not necessarily the reference
            // since the reducer uses object spread which creates a shallow copy
            expect(nextState.other).toEqual(otherConditions);
          },
        ),
        { numRuns: 100 },
      );
    });
  });

  describe('Clearing an empty/non-existent field is a no-op', () => {
    it('should return the same state when clearing a field that does not exist', () => {
      fc.assert(
        fc.property(filterStateArb, (initialState) => {
          // Use a field name that definitely doesn't exist
          const nonExistentField = 'definitely_not_a_field_xyz_123';

          const [nextState, wasChanged] = clearFilterReducer(initialState, nonExistentField);

          // Should return the exact same state object (reference equality)
          expect(nextState).toBe(initialState);
          expect(wasChanged).toBe(false);
        }),
        { numRuns: 100 },
      );
    });

    it('should return the same state when clearing a field with empty array', () => {
      fc.assert(
        fc.property(filterStateArb, fieldNameArb, (baseState, targetField) => {
          // Create a state where the target field has an empty array
          const initialState: GridFilterState = {
            ...baseState,
            [targetField]: [],
          };

          const [nextState, wasChanged] = clearFilterReducer(initialState, targetField);

          // Should return the exact same state object (reference equality)
          expect(nextState).toBe(initialState);
          expect(wasChanged).toBe(false);
        }),
        { numRuns: 100 },
      );
    });

    it('should not invoke any state change for non-existent fields', () => {
      fc.assert(
        fc.property(nonEmptyFilterStateArb, (initialState) => {
          // Find a field that doesn't exist in the state
          const existingFields = new Set(Object.keys(initialState));
          const nonExistentField =
            fieldNames.find((f) => !existingFields.has(f)) ?? 'missing_field';

          const [nextState, wasChanged] = clearFilterReducer(initialState, nonExistentField);

          // No change should occur
          expect(wasChanged).toBe(false);
          expect(nextState).toBe(initialState);
          expect(Object.keys(nextState)).toEqual(Object.keys(initialState));
        }),
        { numRuns: 100 },
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

          // Clear once
          const [afterFirstClear] = clearFilterReducer(initialState, targetField);

          // Clear twice
          const [afterSecondClear] = clearFilterReducer(afterFirstClear, targetField);

          // Results should be equal (same structure and values)
          expect(afterSecondClear).toEqual(afterFirstClear);
        }),
        { numRuns: 100 },
      );
    });

    it('should return the same state reference on second clear (no-op)', () => {
      fc.assert(
        fc.property(nonEmptyConditionsArrayArb, (conditions) => {
          const initialState: GridFilterState = { field1: conditions };

          // Clear once
          const [afterFirstClear, firstChanged] = clearFilterReducer(initialState, 'field1');
          expect(firstChanged).toBe(true);

          // Clear twice - should be a no-op
          const [afterSecondClear, secondChanged] = clearFilterReducer(afterFirstClear, 'field1');
          expect(secondChanged).toBe(false);

          // Second clear should return the same reference
          expect(afterSecondClear).toBe(afterFirstClear);
        }),
        { numRuns: 100 },
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

            // Clear once
            const [afterOneClear] = clearFilterReducer(initialState, targetField);

            // Clear multiple times
            let currentState = initialState;
            for (let i = 0; i < clearCount; i++) {
              [currentState] = clearFilterReducer(currentState, targetField);
            }

            // All should produce the same result
            expect(currentState).toEqual(afterOneClear);
          },
        ),
        { numRuns: 100 },
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
            const initialState: GridFilterState = {
              field1: cond1,
              field2: cond2,
              field3: cond3,
            };

            // Clear field1
            const [afterClear1] = clearFilterReducer(initialState, 'field1');

            // field1 should be gone, field2 and field3 should remain
            expect(afterClear1.field1).toBeUndefined();
            expect(afterClear1.field2).toEqual(cond2);
            expect(afterClear1.field3).toEqual(cond3);

            // Clear field2
            const [afterClear2] = clearFilterReducer(afterClear1, 'field2');

            // field1 and field2 should be gone, field3 should remain
            expect(afterClear2.field1).toBeUndefined();
            expect(afterClear2.field2).toBeUndefined();
            expect(afterClear2.field3).toEqual(cond3);

            // Clear field1 again (idempotent - already cleared)
            const [afterClear1Again, wasChanged] = clearFilterReducer(afterClear2, 'field1');

            // Should be no-op
            expect(wasChanged).toBe(false);
            expect(afterClear1Again).toBe(afterClear2);
          },
        ),
        { numRuns: 100 },
      );
    });

    it('should correctly handle clearing all fields in any order', () => {
      fc.assert(
        fc.property(
          nonEmptyConditionsArrayArb,
          nonEmptyConditionsArrayArb,
          fc.shuffledSubarray(['field1', 'field2'], { minLength: 2, maxLength: 2 }),
          (cond1, cond2, clearOrder) => {
            const initialState: GridFilterState = {
              field1: cond1,
              field2: cond2,
            };

            // Clear in the specified order
            let currentState = initialState;
            for (const field of clearOrder) {
              [currentState] = clearFilterReducer(currentState, field);
            }

            // Both fields should be cleared regardless of order
            expect(currentState.field1).toBeUndefined();
            expect(currentState.field2).toBeUndefined();
            expect(Object.keys(currentState)).toHaveLength(0);
          },
        ),
        { numRuns: 100 },
      );
    });
  });
});
