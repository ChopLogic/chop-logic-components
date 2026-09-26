import { GridFilterType, GridSortDirection } from '@enums';
import type { GridFilterCondition, GridFilterState, GridItem, GridSortState } from '@types';
import * as fc from 'fast-check';
import { describe, expect, it } from 'vitest';

import { filterGridData, sortGridData } from '../Grid.helpers';

const mixedFieldValueArb = fc.oneof(
  fc.string(),
  fc.integer(),
  fc.double({ noNaN: true }),
  fc.boolean(),
  fc.constant(null),
  fc.constant(undefined),
);

const gridItemWithFieldArb = (fieldName: string) =>
  fc.record({
    id: fc.uuid(),
    [fieldName]: mixedFieldValueArb,
  }) as fc.Arbitrary<GridItem>;

const gridItemsWithFieldArb = (fieldName: string) =>
  fc.array(gridItemWithFieldArb(fieldName), { minLength: 0, maxLength: 50 });

const nonBlankStringArb = fc
  .tuple(fc.string({ minLength: 1 }), fc.string())
  .map(([nonEmpty, suffix]) => {
    // Ensure at least one non-whitespace character exists
    const hasNonWhitespace = /\S/.test(nonEmpty);
    return hasNonWhitespace ? nonEmpty + suffix : `a${nonEmpty}${suffix}`;
  })
  .filter((s) => s.trim().length > 0);

const filterTypeArb = fc.constantFrom(
  GridFilterType.StartsWith,
  GridFilterType.Includes,
  GridFilterType.Equals,
);

const filterConditionArb = fc.record({
  type: filterTypeArb,
  value: nonBlankStringArb,
  caseSensitive: fc.boolean(),
}) as fc.Arbitrary<GridFilterCondition>;

function coerceFieldValue(value: unknown): string {
  return value === null || value === undefined ? '' : String(value);
}

function expectedMatchesCondition(fieldValue: unknown, condition: GridFilterCondition): boolean {
  const haystackRaw = coerceFieldValue(fieldValue);
  const needleRaw = condition.value;

  // Normalize case unless caseSensitive
  const haystack = condition.caseSensitive ? haystackRaw : haystackRaw.toLowerCase();
  const needle = condition.caseSensitive ? needleRaw : needleRaw.toLowerCase();

  switch (condition.type) {
    case GridFilterType.StartsWith:
      return haystack.startsWith(needle);
    case GridFilterType.Includes:
      return haystack.includes(needle);
    case GridFilterType.Equals:
      return haystack === needle;
    default:
      return true;
  }
}

describe('filterGridData - Property-Based Tests', () => {
  // Feature: grid-column-filtering, Property 1: Single-condition predicate correctness
  describe('Single-condition predicate correctness', () => {
    it('should retain a row if and only if the type predicate holds for the coerced, case-normalized field value', () => {
      const fieldName = 'testField';

      fc.assert(
        fc.property(gridItemsWithFieldArb(fieldName), filterConditionArb, (items, condition) => {
          const filterState: GridFilterState = {
            [fieldName]: [condition],
          };

          const result = filterGridData(items, filterState);

          // For each item, verify the result matches the expected predicate
          for (const item of items) {
            const shouldBeRetained = expectedMatchesCondition(item[fieldName], condition);
            const isRetained = result.includes(item);

            expect(isRetained).toBe(shouldBeRetained);
          }

          // Also verify all retained items are from the original dataset
          for (const retainedItem of result) {
            expect(items).toContain(retainedItem);
          }
        }),
        { numRuns: 100 },
      );
    });

    it('should correctly apply StartsWith predicate', () => {
      const fieldName = 'name';

      fc.assert(
        fc.property(
          gridItemsWithFieldArb(fieldName),
          nonBlankStringArb,
          fc.boolean(),
          (items, filterValue, caseSensitive) => {
            const condition: GridFilterCondition = {
              type: GridFilterType.StartsWith,
              value: filterValue,
              caseSensitive,
            };

            const filterState: GridFilterState = {
              [fieldName]: [condition],
            };

            const result = filterGridData(items, filterState);

            for (const item of items) {
              const fieldStr = coerceFieldValue(item[fieldName]);
              const haystack = caseSensitive ? fieldStr : fieldStr.toLowerCase();
              const needle = caseSensitive ? filterValue : filterValue.toLowerCase();

              const shouldBeRetained = haystack.startsWith(needle);
              const isRetained = result.includes(item);

              expect(isRetained).toBe(shouldBeRetained);
            }
          },
        ),
        { numRuns: 100 },
      );
    });

    it('should correctly apply Includes predicate', () => {
      const fieldName = 'description';

      fc.assert(
        fc.property(
          gridItemsWithFieldArb(fieldName),
          nonBlankStringArb,
          fc.boolean(),
          (items, filterValue, caseSensitive) => {
            const condition: GridFilterCondition = {
              type: GridFilterType.Includes,
              value: filterValue,
              caseSensitive,
            };

            const filterState: GridFilterState = {
              [fieldName]: [condition],
            };

            const result = filterGridData(items, filterState);

            for (const item of items) {
              const fieldStr = coerceFieldValue(item[fieldName]);
              const haystack = caseSensitive ? fieldStr : fieldStr.toLowerCase();
              const needle = caseSensitive ? filterValue : filterValue.toLowerCase();

              const shouldBeRetained = haystack.includes(needle);
              const isRetained = result.includes(item);

              expect(isRetained).toBe(shouldBeRetained);
            }
          },
        ),
        { numRuns: 100 },
      );
    });

    it('should correctly apply Equals predicate', () => {
      const fieldName = 'status';

      fc.assert(
        fc.property(
          gridItemsWithFieldArb(fieldName),
          nonBlankStringArb,
          fc.boolean(),
          (items, filterValue, caseSensitive) => {
            const condition: GridFilterCondition = {
              type: GridFilterType.Equals,
              value: filterValue,
              caseSensitive,
            };

            const filterState: GridFilterState = {
              [fieldName]: [condition],
            };

            const result = filterGridData(items, filterState);

            for (const item of items) {
              const fieldStr = coerceFieldValue(item[fieldName]);
              const haystack = caseSensitive ? fieldStr : fieldStr.toLowerCase();
              const needle = caseSensitive ? filterValue : filterValue.toLowerCase();

              const shouldBeRetained = haystack === needle;
              const isRetained = result.includes(item);

              expect(isRetained).toBe(shouldBeRetained);
            }
          },
        ),
        { numRuns: 100 },
      );
    });

    it('should handle case-insensitive matching correctly', () => {
      const fieldName = 'text';

      fc.assert(
        fc.property(
          gridItemsWithFieldArb(fieldName),
          filterTypeArb,
          nonBlankStringArb,
          (items, filterType, filterValue) => {
            const condition: GridFilterCondition = {
              type: filterType,
              value: filterValue,
              caseSensitive: false, // Case-insensitive
            };

            const filterState: GridFilterState = {
              [fieldName]: [condition],
            };

            const result = filterGridData(items, filterState);

            for (const item of items) {
              const fieldStr = coerceFieldValue(item[fieldName]);
              // Both normalized to lowercase for case-insensitive
              const haystack = fieldStr.toLowerCase();
              const needle = filterValue.toLowerCase();

              let shouldBeRetained: boolean;
              switch (filterType) {
                case GridFilterType.StartsWith:
                  shouldBeRetained = haystack.startsWith(needle);
                  break;
                case GridFilterType.Includes:
                  shouldBeRetained = haystack.includes(needle);
                  break;
                case GridFilterType.Equals:
                  shouldBeRetained = haystack === needle;
                  break;
                default:
                  shouldBeRetained = true;
              }

              const isRetained = result.includes(item);
              expect(isRetained).toBe(shouldBeRetained);
            }
          },
        ),
        { numRuns: 100 },
      );
    });

    it('should handle case-sensitive matching correctly', () => {
      const fieldName = 'code';

      fc.assert(
        fc.property(
          gridItemsWithFieldArb(fieldName),
          filterTypeArb,
          nonBlankStringArb,
          (items, filterType, filterValue) => {
            const condition: GridFilterCondition = {
              type: filterType,
              value: filterValue,
              caseSensitive: true, // Case-sensitive
            };

            const filterState: GridFilterState = {
              [fieldName]: [condition],
            };

            const result = filterGridData(items, filterState);

            for (const item of items) {
              const fieldStr = coerceFieldValue(item[fieldName]);
              // No case normalization for case-sensitive
              const haystack = fieldStr;
              const needle = filterValue;

              let shouldBeRetained: boolean;
              switch (filterType) {
                case GridFilterType.StartsWith:
                  shouldBeRetained = haystack.startsWith(needle);
                  break;
                case GridFilterType.Includes:
                  shouldBeRetained = haystack.includes(needle);
                  break;
                case GridFilterType.Equals:
                  shouldBeRetained = haystack === needle;
                  break;
                default:
                  shouldBeRetained = true;
              }

              const isRetained = result.includes(item);
              expect(isRetained).toBe(shouldBeRetained);
            }
          },
        ),
        { numRuns: 100 },
      );
    });

    it('should preserve row order in the filtered result', () => {
      const fieldName = 'value';

      fc.assert(
        fc.property(gridItemsWithFieldArb(fieldName), filterConditionArb, (items, condition) => {
          const filterState: GridFilterState = {
            [fieldName]: [condition],
          };

          const result = filterGridData(items, filterState);

          // Verify the order of retained items matches their original order
          const expectedOrder = items.filter((item) =>
            expectedMatchesCondition(item[fieldName], condition),
          );

          expect(result).toEqual(expectedOrder);
        }),
        { numRuns: 100 },
      );
    });
  });

  // Feature: grid-column-filtering, Property 2: Empty and blank conditions are neutral (identity)
  describe('Property 2: Empty and blank conditions are neutral (identity)', () => {
    /**
     * **Validates: Requirements 4.6, 7.3**
     *
     * _For all_ datasets, `filterGridData` with an empty filter state, or a state whose
     * every condition has an empty or whitespace-only value, returns the dataset unchanged
     * in both membership and order. Adding or removing a blank condition never changes the result.
     */

    /**
     * Arbitrary for generating blank/whitespace-only strings.
     */
    const blankStringArb = fc.oneof(
      fc.constant(''),
      fc.constant('   '),
      fc.constant('\t'),
      fc.constant('\n'),
      fc.constant('  \t\n  '),
      fc.constant('\r'),
      fc.constant(' \t '),
      fc.constant('\n\n'),
      fc.constant('    '),
    );

    /**
     * Arbitrary for a blank condition (value is empty or whitespace-only).
     */
    const blankConditionArb: fc.Arbitrary<GridFilterCondition> = fc.record({
      type: filterTypeArb,
      value: blankStringArb,
      caseSensitive: fc.boolean(),
    });

    /**
     * Arbitrary for a filter state where all conditions are blank.
     */
    const blankFilterStateArb: fc.Arbitrary<GridFilterState> = fc
      .dictionary(
        fc.constantFrom('name', 'age', 'email', 'active', 'id'),
        fc.array(blankConditionArb, { minLength: 0, maxLength: 5 }),
      )
      .map((dict) => dict as GridFilterState);

    /**
     * Arbitrary for generating a general GridItem with multiple fields.
     */
    const generalGridItemArb = fc
      .record({
        id: fc.uuid(),
        name: fc.string(),
        age: fc.oneof(fc.integer(), fc.string(), fc.constant(null), fc.constant(undefined)),
        email: fc.oneof(fc.emailAddress(), fc.constant(null), fc.constant(undefined)),
        active: fc.oneof(fc.boolean(), fc.constant(null), fc.constant(undefined)),
      })
      .map((obj) => obj as GridItem);

    /**
     * Arbitrary for generating a dataset of general GridItems.
     */
    const generalGridDataArb = fc.array(generalGridItemArb, { minLength: 0, maxLength: 50 });

    it('returns data unchanged when filterState is empty', () => {
      fc.assert(
        fc.property(generalGridDataArb, (data) => {
          const emptyFilterState: GridFilterState = {};
          const result = filterGridData(data, emptyFilterState);

          // Same membership and order
          expect(result).toEqual(data);
          // Same reference (optimization: no unnecessary copying)
          expect(result).toBe(data);
        }),
        { numRuns: 100 },
      );
    });

    it('returns data unchanged when all conditions have empty or whitespace-only values', () => {
      fc.assert(
        fc.property(generalGridDataArb, blankFilterStateArb, (data, filterState) => {
          const result = filterGridData(data, filterState);

          // Same membership and order
          expect(result).toEqual(data);
          // Same reference when no active conditions
          expect(result).toBe(data);
        }),
        { numRuns: 100 },
      );
    });

    it('adding a blank condition to an empty state does not change the result', () => {
      fc.assert(
        fc.property(
          generalGridDataArb,
          blankConditionArb,
          fc.constantFrom('name', 'age', 'email', 'active'),
          (data, blankCondition, field) => {
            const emptyState: GridFilterState = {};
            const stateWithBlank: GridFilterState = { [field]: [blankCondition] };

            const resultEmpty = filterGridData(data, emptyState);
            const resultWithBlank = filterGridData(data, stateWithBlank);

            // Both return the same data unchanged
            expect(resultEmpty).toEqual(data);
            expect(resultWithBlank).toEqual(data);
          },
        ),
        { numRuns: 100 },
      );
    });

    it('removing a blank condition from a state does not change the result', () => {
      fc.assert(
        fc.property(
          generalGridDataArb,
          blankConditionArb,
          fc.constantFrom('name', 'age', 'email'),
          (data, blankCondition, field) => {
            const stateWithBlank: GridFilterState = { [field]: [blankCondition] };
            const stateWithoutBlank: GridFilterState = {};

            const resultWithBlank = filterGridData(data, stateWithBlank);
            const resultWithoutBlank = filterGridData(data, stateWithoutBlank);

            // Both return the same result
            expect(resultWithBlank).toEqual(resultWithoutBlank);
          },
        ),
        { numRuns: 100 },
      );
    });

    it('multiple blank conditions across multiple columns still return data unchanged', () => {
      fc.assert(
        fc.property(
          generalGridDataArb,
          fc.array(blankConditionArb, { minLength: 1, maxLength: 5 }),
          fc.array(blankConditionArb, { minLength: 1, maxLength: 5 }),
          (data, blankConditions1, blankConditions2) => {
            const filterState: GridFilterState = {
              name: blankConditions1,
              email: blankConditions2,
            };

            const result = filterGridData(data, filterState);

            // Same membership and order
            expect(result).toEqual(data);
            // Same reference
            expect(result).toBe(data);
          },
        ),
        { numRuns: 100 },
      );
    });
  });
});

// Feature: grid-column-filtering, Property 5: Condition-order independence
describe('Property 5: Condition-order independence', () => {
  /**
   * Helper to shuffle an array deterministically using a seed (Fisher-Yates).
   */
  function shuffle<T>(array: T[], seed: number): T[] {
    const result = [...array];
    let currentIndex = result.length;
    let randomValue = seed;

    while (currentIndex !== 0) {
      // Simple seeded random for deterministic shuffling
      randomValue = (randomValue * 1103515245 + 12345) & 0x7fffffff;
      const randomIndex = randomValue % currentIndex;
      currentIndex--;

      [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
    }

    return result;
  }

  /**
   * Arbitrary for generating a GridItem with multiple fields.
   */
  const gridItemWithFieldsArb = (fields: string[]) =>
    fc.record({
      id: fc.uuid(),
      ...Object.fromEntries(fields.map((field) => [field, mixedFieldValueArb])),
    }) as fc.Arbitrary<GridItem>;

  /**
   * **Validates: Requirements 7.1, 7.2**
   *
   * _For all_ datasets and sets of conditions, applying the conditions in any order
   * produces the same result — identical membership and identical (source) row order.
   */
  it('shuffling conditions within a single column produces the same filtered result', () => {
    const field = 'name';

    fc.assert(
      fc.property(
        fc.array(gridItemWithFieldArb(field), { minLength: 0, maxLength: 20 }),
        fc.array(filterConditionArb, { minLength: 2, maxLength: 5 }),
        fc.integer({ min: 1, max: 1000 }),
        (data, conditions, seed) => {
          // Original order
          const filterState: GridFilterState = { [field]: conditions };
          const resultOriginal = filterGridData(data, filterState);

          // Shuffled order
          const shuffledConditions = shuffle(conditions, seed);
          const filterStateShuffled: GridFilterState = { [field]: shuffledConditions };
          const resultShuffled = filterGridData(data, filterStateShuffled);

          // Results should be identical in membership and order
          expect(resultShuffled).toEqual(resultOriginal);
        },
      ),
      { numRuns: 100 },
    );
  });

  it('shuffling the order of columns in filter state produces the same filtered result', () => {
    const fields = ['name', 'status', 'category'];

    fc.assert(
      fc.property(
        fc.array(gridItemWithFieldsArb(fields), { minLength: 0, maxLength: 20 }),
        fc.record({
          name: fc.array(filterConditionArb, { minLength: 1, maxLength: 3 }),
          status: fc.array(filterConditionArb, { minLength: 1, maxLength: 3 }),
          category: fc.array(filterConditionArb, { minLength: 1, maxLength: 3 }),
        }),
        fc.integer({ min: 1, max: 1000 }),
        (data, conditionsByField, seed) => {
          // Original order of columns
          const filterStateOriginal: GridFilterState = {
            name: conditionsByField.name,
            status: conditionsByField.status,
            category: conditionsByField.category,
          };
          const resultOriginal = filterGridData(data, filterStateOriginal);

          // Shuffled column order (different key insertion order)
          const columnOrder = shuffle(['name', 'status', 'category'], seed);
          const filterStateShuffled: GridFilterState = {};
          for (const col of columnOrder) {
            filterStateShuffled[col] = conditionsByField[col as keyof typeof conditionsByField];
          }
          const resultShuffled = filterGridData(data, filterStateShuffled);

          // Results should be identical in membership and order
          expect(resultShuffled).toEqual(resultOriginal);
        },
      ),
      { numRuns: 100 },
    );
  });

  it('shuffling both conditions within columns and column order produces the same filtered result', () => {
    const fields = ['field1', 'field2'];

    fc.assert(
      fc.property(
        fc.array(gridItemWithFieldsArb(fields), { minLength: 0, maxLength: 15 }),
        fc.array(filterConditionArb, { minLength: 1, maxLength: 4 }),
        fc.array(filterConditionArb, { minLength: 1, maxLength: 4 }),
        fc.integer({ min: 1, max: 1000 }),
        fc.integer({ min: 1001, max: 2000 }),
        (data, conditions1, conditions2, seed1, seed2) => {
          // Original state
          const filterStateOriginal: GridFilterState = {
            field1: conditions1,
            field2: conditions2,
          };
          const resultOriginal = filterGridData(data, filterStateOriginal);

          // Shuffle conditions within each column and swap column order
          const shuffledConditions1 = shuffle(conditions1, seed1);
          const shuffledConditions2 = shuffle(conditions2, seed2);
          const filterStateShuffled: GridFilterState = {
            field2: shuffledConditions2,
            field1: shuffledConditions1,
          };
          const resultShuffled = filterGridData(data, filterStateShuffled);

          // Results should be identical in membership and order
          expect(resultShuffled).toEqual(resultOriginal);
        },
      ),
      { numRuns: 100 },
    );
  });

  it('applying conditions one at a time in different orders produces the same final result', () => {
    const field = 'value';

    fc.assert(
      fc.property(
        fc.array(gridItemWithFieldArb(field), { minLength: 0, maxLength: 15 }),
        fc.array(filterConditionArb, { minLength: 2, maxLength: 4 }),
        fc.integer({ min: 1, max: 1000 }),
        (data, conditions, seed) => {
          // Apply all conditions at once
          const filterStateAll: GridFilterState = { [field]: conditions };
          const resultAll = filterGridData(data, filterStateAll);

          // Apply conditions in original order, one at a time (accumulating)
          let accumulatedConditions: GridFilterCondition[] = [];
          for (const cond of conditions) {
            accumulatedConditions = [...accumulatedConditions, cond];
          }
          const resultAccumulated = filterGridData(data, { [field]: accumulatedConditions });

          // Apply conditions in shuffled order, one at a time
          const shuffledConditions = shuffle(conditions, seed);
          let accumulatedShuffled: GridFilterCondition[] = [];
          for (const cond of shuffledConditions) {
            accumulatedShuffled = [...accumulatedShuffled, cond];
          }
          const resultShuffledAccumulated = filterGridData(data, {
            [field]: accumulatedShuffled,
          });

          // All three approaches should produce the same result
          expect(resultAccumulated).toEqual(resultAll);
          expect(resultShuffledAccumulated).toEqual(resultAll);
        },
      ),
      { numRuns: 100 },
    );
  });
});

// Feature: grid-column-filtering, Property 3: Conjunction (AND) within and across columns
describe('Property 3: Conjunction (AND) within and across columns', () => {
  /**
   * Arbitrary for generating a GridItem with multiple fields.
   */
  const gridItemWithFieldsArb = (fields: string[]) =>
    fc.record({
      id: fc.uuid(),
      ...Object.fromEntries(fields.map((field) => [field, mixedFieldValueArb])),
    }) as fc.Arbitrary<GridItem>;

  /**
   * Arbitrary for generating an array of GridItems with multiple fields.
   */
  const gridItemsWithFieldsArb = (fields: string[]) =>
    fc.array(gridItemWithFieldsArb(fields), { minLength: 0, maxLength: 30 });

  /**
   * Helper to check if a condition is active (non-blank value).
   */
  const isActiveCondition = (condition: GridFilterCondition): boolean => {
    return condition.value.trim().length > 0;
  };

  /**
   * Helper to check if a row matches all active conditions in a filter state.
   * This is the oracle for Property 3.
   */
  const rowMatchesAllConditions = (row: GridItem, filterState: GridFilterState): boolean => {
    for (const [field, conditions] of Object.entries(filterState)) {
      const activeConditions = conditions.filter(isActiveCondition);
      for (const condition of activeConditions) {
        if (!expectedMatchesCondition(row[field], condition)) {
          return false;
        }
      }
    }
    return true;
  };

  /**
   * **Validates: Requirements 7.1, 7.2**
   *
   * _For all_ datasets and filter states, a row is retained _if and only if_
   * it satisfies every active condition of every filtered column.
   *
   * Req 7.1: WHERE a single column has multiple Active_Filters, THE Filter_Grid_Data
   * SHALL retain a row only if the column field value satisfies every Filter_Condition of that column.
   *
   * Req 7.2: WHERE multiple columns have Active_Filters, THE Filter_Grid_Data SHALL retain
   * a row only if the row satisfies the Active_Filters of every filtered column.
   */
  it('retains a row if and only if it satisfies every active condition (single column, multiple conditions - Req 7.1)', () => {
    const fieldName = 'name';

    fc.assert(
      fc.property(
        fc.array(gridItemWithFieldsArb([fieldName]), { minLength: 0, maxLength: 30 }),
        fc.array(filterConditionArb, { minLength: 1, maxLength: 5 }),
        (data, conditions) => {
          // Create filter state with multiple conditions on a single column
          const filterState: GridFilterState = {
            [fieldName]: conditions,
          };

          const result = filterGridData(data, filterState);

          // Verify each retained row satisfies ALL conditions on the column (AND within column)
          for (const row of result) {
            for (const condition of conditions) {
              expect(expectedMatchesCondition(row[fieldName], condition)).toBe(true);
            }
          }

          // Verify rows NOT in result fail at least one condition
          const resultIds = new Set(result.map((r) => r.id));
          for (const row of data) {
            if (!resultIds.has(row.id)) {
              const failsSome = conditions.some(
                (c) => !expectedMatchesCondition(row[fieldName], c),
              );
              expect(failsSome).toBe(true);
            }
          }
        },
      ),
      { numRuns: 100 },
    );
  });

  it('retains a row if and only if it satisfies every active condition (multiple columns - Req 7.2)', () => {
    const fields = ['name', 'status'];

    fc.assert(
      fc.property(
        gridItemsWithFieldsArb(fields),
        filterConditionArb,
        filterConditionArb,
        (data, nameCondition, statusCondition) => {
          // Create filter state with conditions on different columns
          const filterState: GridFilterState = {
            name: [nameCondition],
            status: [statusCondition],
          };

          const result = filterGridData(data, filterState);

          // Verify each retained row satisfies conditions on BOTH columns (AND across columns)
          for (const row of result) {
            expect(expectedMatchesCondition(row.name, nameCondition)).toBe(true);
            expect(expectedMatchesCondition(row.status, statusCondition)).toBe(true);
          }

          // Verify rows NOT in result fail at least one condition on at least one column
          const resultIds = new Set(result.map((r) => r.id));
          for (const row of data) {
            if (!resultIds.has(row.id)) {
              const matchesName = expectedMatchesCondition(row.name, nameCondition);
              const matchesStatus = expectedMatchesCondition(row.status, statusCondition);
              expect(matchesName && matchesStatus).toBe(false);
            }
          }
        },
      ),
      { numRuns: 100 },
    );
  });

  it('retains a row if and only if it satisfies every active condition (general case with multiple columns and conditions)', () => {
    const fields = ['col1', 'col2', 'col3'];

    // Arbitrary for filter state with 1-3 columns, each with 0-3 conditions
    // At least one column must have at least one condition
    const filterStateArb = fc
      .record({
        col1: fc.array(filterConditionArb, { minLength: 0, maxLength: 3 }),
        col2: fc.array(filterConditionArb, { minLength: 0, maxLength: 3 }),
        col3: fc.array(filterConditionArb, { minLength: 0, maxLength: 3 }),
      })
      .filter((state) => state.col1.length > 0 || state.col2.length > 0 || state.col3.length > 0);

    fc.assert(
      fc.property(gridItemsWithFieldsArb(fields), filterStateArb, (data, filterState) => {
        const result = filterGridData(data, filterState);

        // Verify each retained row satisfies ALL conditions on ALL filtered columns
        for (const row of result) {
          expect(rowMatchesAllConditions(row, filterState)).toBe(true);
        }

        // Verify rows NOT in result fail at least one condition
        const resultIds = new Set(result.map((r) => r.id));
        for (const row of data) {
          if (!resultIds.has(row.id)) {
            expect(rowMatchesAllConditions(row, filterState)).toBe(false);
          }
        }

        // Verify the result is exactly the rows that match all conditions (bidirectional check)
        const expectedIds = new Set(
          data.filter((row) => rowMatchesAllConditions(row, filterState)).map((r) => r.id),
        );
        expect(resultIds).toEqual(expectedIds);
      }),
      { numRuns: 100 },
    );
  });

  it('preserves the original row order for retained rows', () => {
    const fields = ['name', 'category'];

    fc.assert(
      fc.property(
        gridItemsWithFieldsArb(fields),
        filterConditionArb,
        filterConditionArb,
        (data, cond1, cond2) => {
          const filterState: GridFilterState = {
            name: [cond1],
            category: [cond2],
          };

          const result = filterGridData(data, filterState);

          // The expected result is the original data filtered, preserving order
          const expected = data.filter((row) => rowMatchesAllConditions(row, filterState));

          // Verify exact equality (membership + order)
          expect(result).toEqual(expected);
        },
      ),
      { numRuns: 100 },
    );
  });
});

// Feature: grid-column-filtering, Property 6: Case-insensitive is a superset of case-sensitive
describe('Property 6: Case-insensitive is a superset of case-sensitive', () => {
  /**
   * **Validates: Requirements 5.3, 5.4**
   *
   * _For all_ datasets and conditions, the rows retained with `caseSensitive = true`
   * are always a subset of the rows retained by the otherwise-identical condition
   * with `caseSensitive = false`.
   *
   * Rationale: Case-insensitive matching normalizes both the field value and the filter
   * value to the same case (lowercase), which means any string that matches case-sensitively
   * will also match case-insensitively. However, the reverse is not true — a case-insensitive
   * match may include rows that differ only in casing, which would be excluded by case-sensitive
   * matching.
   */

  /**
   * Arbitrary for generating a GridItem with a specific field.
   */
  const gridItemWithFieldArb = (fieldName: string) =>
    fc.record({
      id: fc.uuid(),
      [fieldName]: mixedFieldValueArb,
    }) as fc.Arbitrary<GridItem>;

  /**
   * Arbitrary for generating an array of GridItems with a specific field.
   */
  const gridItemsWithFieldArb = (fieldName: string) =>
    fc.array(gridItemWithFieldArb(fieldName), { minLength: 0, maxLength: 50 });

  it('rows retained with caseSensitive=true are always a subset of rows retained with caseSensitive=false', () => {
    const fieldName = 'testField';

    fc.assert(
      fc.property(
        gridItemsWithFieldArb(fieldName),
        filterTypeArb,
        nonBlankStringArb,
        (data, filterType, filterValue) => {
          // Create two conditions: one case-sensitive, one case-insensitive
          const caseSensitiveCondition: GridFilterCondition = {
            type: filterType,
            value: filterValue,
            caseSensitive: true,
          };

          const caseInsensitiveCondition: GridFilterCondition = {
            type: filterType,
            value: filterValue,
            caseSensitive: false,
          };

          const filterStateSensitive: GridFilterState = {
            [fieldName]: [caseSensitiveCondition],
          };

          const filterStateInsensitive: GridFilterState = {
            [fieldName]: [caseInsensitiveCondition],
          };

          const resultSensitive = filterGridData(data, filterStateSensitive);
          const resultInsensitive = filterGridData(data, filterStateInsensitive);

          // Every row in resultSensitive must also be in resultInsensitive
          const insensitiveIds = new Set(resultInsensitive.map((item) => item.id));
          for (const item of resultSensitive) {
            expect(insensitiveIds.has(item.id)).toBe(true);
          }

          // Additionally, resultInsensitive.length >= resultSensitive.length
          expect(resultInsensitive.length).toBeGreaterThanOrEqual(resultSensitive.length);
        },
      ),
      { numRuns: 100 },
    );
  });

  it('case-insensitive result is a superset for StartsWith filter type', () => {
    const fieldName = 'name';

    fc.assert(
      fc.property(gridItemsWithFieldArb(fieldName), nonBlankStringArb, (data, filterValue) => {
        const caseSensitiveCondition: GridFilterCondition = {
          type: GridFilterType.StartsWith,
          value: filterValue,
          caseSensitive: true,
        };

        const caseInsensitiveCondition: GridFilterCondition = {
          type: GridFilterType.StartsWith,
          value: filterValue,
          caseSensitive: false,
        };

        const resultSensitive = filterGridData(data, { [fieldName]: [caseSensitiveCondition] });
        const resultInsensitive = filterGridData(data, { [fieldName]: [caseInsensitiveCondition] });

        // Subset check: all case-sensitive results must appear in case-insensitive results
        const insensitiveIds = new Set(resultInsensitive.map((item) => item.id));
        for (const item of resultSensitive) {
          expect(insensitiveIds.has(item.id)).toBe(true);
        }
      }),
      { numRuns: 100 },
    );
  });

  it('case-insensitive result is a superset for Includes filter type', () => {
    const fieldName = 'description';

    fc.assert(
      fc.property(gridItemsWithFieldArb(fieldName), nonBlankStringArb, (data, filterValue) => {
        const caseSensitiveCondition: GridFilterCondition = {
          type: GridFilterType.Includes,
          value: filterValue,
          caseSensitive: true,
        };

        const caseInsensitiveCondition: GridFilterCondition = {
          type: GridFilterType.Includes,
          value: filterValue,
          caseSensitive: false,
        };

        const resultSensitive = filterGridData(data, { [fieldName]: [caseSensitiveCondition] });
        const resultInsensitive = filterGridData(data, { [fieldName]: [caseInsensitiveCondition] });

        // Subset check: all case-sensitive results must appear in case-insensitive results
        const insensitiveIds = new Set(resultInsensitive.map((item) => item.id));
        for (const item of resultSensitive) {
          expect(insensitiveIds.has(item.id)).toBe(true);
        }
      }),
      { numRuns: 100 },
    );
  });

  it('case-insensitive result is a superset for Equals filter type', () => {
    const fieldName = 'status';

    fc.assert(
      fc.property(gridItemsWithFieldArb(fieldName), nonBlankStringArb, (data, filterValue) => {
        const caseSensitiveCondition: GridFilterCondition = {
          type: GridFilterType.Equals,
          value: filterValue,
          caseSensitive: true,
        };

        const caseInsensitiveCondition: GridFilterCondition = {
          type: GridFilterType.Equals,
          value: filterValue,
          caseSensitive: false,
        };

        const resultSensitive = filterGridData(data, { [fieldName]: [caseSensitiveCondition] });
        const resultInsensitive = filterGridData(data, { [fieldName]: [caseInsensitiveCondition] });

        // Subset check: all case-sensitive results must appear in case-insensitive results
        const insensitiveIds = new Set(resultInsensitive.map((item) => item.id));
        for (const item of resultSensitive) {
          expect(insensitiveIds.has(item.id)).toBe(true);
        }
      }),
      { numRuns: 100 },
    );
  });

  it('case-sensitive can exclude rows that case-insensitive includes (demonstrates proper superset)', () => {
    const fieldName = 'text';

    fc.assert(
      fc.property(
        gridItemsWithFieldArb(fieldName),
        filterTypeArb,
        nonBlankStringArb,
        (data, filterType, filterValue) => {
          const caseSensitiveCondition: GridFilterCondition = {
            type: filterType,
            value: filterValue,
            caseSensitive: true,
          };

          const caseInsensitiveCondition: GridFilterCondition = {
            type: filterType,
            value: filterValue,
            caseSensitive: false,
          };

          const resultSensitive = filterGridData(data, { [fieldName]: [caseSensitiveCondition] });
          const resultInsensitive = filterGridData(data, {
            [fieldName]: [caseInsensitiveCondition],
          });

          // The difference (insensitive - sensitive) should contain only rows that:
          // 1. Match when case is ignored
          // 2. Don't match when case matters
          const sensitiveIds = new Set(resultSensitive.map((item) => item.id));
          const insensitiveOnlyItems = resultInsensitive.filter(
            (item) => !sensitiveIds.has(item.id),
          );

          // Verify that insensitive-only items truly don't match case-sensitively
          for (const item of insensitiveOnlyItems) {
            const fieldStr =
              item[fieldName] === null || item[fieldName] === undefined
                ? ''
                : String(item[fieldName]);

            // Should NOT match case-sensitively
            let shouldMatchSensitive: boolean;
            switch (filterType) {
              case GridFilterType.StartsWith:
                shouldMatchSensitive = fieldStr.startsWith(filterValue);
                break;
              case GridFilterType.Includes:
                shouldMatchSensitive = fieldStr.includes(filterValue);
                break;
              case GridFilterType.Equals:
                shouldMatchSensitive = fieldStr === filterValue;
                break;
              default:
                shouldMatchSensitive = true;
            }
            expect(shouldMatchSensitive).toBe(false);

            // Should match case-insensitively
            const haystackLower = fieldStr.toLowerCase();
            const needleLower = filterValue.toLowerCase();
            let shouldMatchInsensitive: boolean;
            switch (filterType) {
              case GridFilterType.StartsWith:
                shouldMatchInsensitive = haystackLower.startsWith(needleLower);
                break;
              case GridFilterType.Includes:
                shouldMatchInsensitive = haystackLower.includes(needleLower);
                break;
              case GridFilterType.Equals:
                shouldMatchInsensitive = haystackLower === needleLower;
                break;
              default:
                shouldMatchInsensitive = true;
            }
            expect(shouldMatchInsensitive).toBe(true);
          }
        },
      ),
      { numRuns: 100 },
    );
  });

  it('with multiple conditions, case-insensitive result is still a superset of case-sensitive result', () => {
    const fieldName = 'data';

    fc.assert(
      fc.property(
        gridItemsWithFieldArb(fieldName),
        fc.array(
          fc.record({
            type: filterTypeArb,
            value: nonBlankStringArb,
          }),
          { minLength: 1, maxLength: 3 },
        ),
        (data, conditionSpecs) => {
          // Create case-sensitive and case-insensitive versions of all conditions
          const caseSensitiveConditions: GridFilterCondition[] = conditionSpecs.map((spec) => ({
            ...spec,
            caseSensitive: true,
          }));

          const caseInsensitiveConditions: GridFilterCondition[] = conditionSpecs.map((spec) => ({
            ...spec,
            caseSensitive: false,
          }));

          const resultSensitive = filterGridData(data, { [fieldName]: caseSensitiveConditions });
          const resultInsensitive = filterGridData(data, {
            [fieldName]: caseInsensitiveConditions,
          });

          // Subset check: all case-sensitive results must appear in case-insensitive results
          const insensitiveIds = new Set(resultInsensitive.map((item) => item.id));
          for (const item of resultSensitive) {
            expect(insensitiveIds.has(item.id)).toBe(true);
          }

          // Additionally verify the superset relationship holds
          expect(resultInsensitive.length).toBeGreaterThanOrEqual(resultSensitive.length);
        },
      ),
      { numRuns: 100 },
    );
  });
});

// Feature: grid-column-filtering, Property 7: String-coercion equivalence
describe('Property 7: String-coercion equivalence', () => {
  /**
   * **Validates: Requirements 5.5**
   *
   * _For all_ datasets and filter states, filtering a dataset produces the same result
   * as filtering the dataset with every field value pre-coerced to its string form
   * (`null`/`undefined` → `''`). Field value type never affects the outcome beyond its
   * string representation.
   */

  /**
   * Arbitrary for generating a GridItem with mixed-type values across multiple fields.
   * Specifically tests strings, numbers, booleans, null, undefined.
   */
  const mixedTypeGridItemArb = fc
    .record({
      id: fc.uuid(),
      stringField: fc.string(),
      numberField: fc.oneof(fc.integer(), fc.double({ noNaN: true })),
      booleanField: fc.boolean(),
      nullField: fc.constant(null),
      undefinedField: fc.constant(undefined),
      mixedField: mixedFieldValueArb,
    })
    .map((obj) => obj as GridItem);

  /**
   * Arbitrary for generating a dataset with mixed-type field values.
   */
  const mixedTypeDatasetArb = fc.array(mixedTypeGridItemArb, { minLength: 0, maxLength: 30 });

  /**
   * Pre-coerce a dataset: convert all field values to their string form.
   * null/undefined → '', everything else via String().
   */
  const preCoerceDataset = (data: GridItem[]): GridItem[] => {
    return data.map((item) => {
      const coercedItem: GridItem = { id: item.id };
      for (const [key, value] of Object.entries(item)) {
        if (key === 'id') continue;
        coercedItem[key] = coerceFieldValue(value);
      }
      return coercedItem;
    });
  };

  const fieldNames = [
    'stringField',
    'numberField',
    'booleanField',
    'nullField',
    'undefinedField',
    'mixedField',
  ];

  it('filtering produces the same result as filtering pre-coerced data (single condition)', () => {
    fc.assert(
      fc.property(
        mixedTypeDatasetArb,
        fc.constantFrom(...fieldNames),
        filterConditionArb,
        (data, fieldName, condition) => {
          // Filter the original dataset
          const filterState: GridFilterState = { [fieldName]: [condition] };
          const resultOriginal = filterGridData(data, filterState);

          // Pre-coerce the dataset and filter it
          const coercedData = preCoerceDataset(data);
          const resultCoerced = filterGridData(coercedData, filterState);

          // The results should have the same number of rows
          expect(resultOriginal.length).toBe(resultCoerced.length);

          // The retained row indices should match (same positions in original order)
          const originalIds = resultOriginal.map((item) => item.id);
          const coercedIds = resultCoerced.map((item) => item.id);
          expect(originalIds).toEqual(coercedIds);
        },
      ),
      { numRuns: 100 },
    );
  });

  it('filtering produces the same result as filtering pre-coerced data (multiple conditions on one field)', () => {
    fc.assert(
      fc.property(
        mixedTypeDatasetArb,
        fc.constantFrom(...fieldNames),
        fc.array(filterConditionArb, { minLength: 1, maxLength: 4 }),
        (data, fieldName, conditions) => {
          // Filter the original dataset
          const filterState: GridFilterState = { [fieldName]: conditions };
          const resultOriginal = filterGridData(data, filterState);

          // Pre-coerce the dataset and filter it
          const coercedData = preCoerceDataset(data);
          const resultCoerced = filterGridData(coercedData, filterState);

          // The retained row IDs should match
          const originalIds = resultOriginal.map((item) => item.id);
          const coercedIds = resultCoerced.map((item) => item.id);
          expect(originalIds).toEqual(coercedIds);
        },
      ),
      { numRuns: 100 },
    );
  });

  it('filtering produces the same result as filtering pre-coerced data (conditions across multiple fields)', () => {
    // Arbitrary for filter state across multiple fields
    const multiFieldFilterStateArb = fc
      .record({
        stringField: fc.array(filterConditionArb, { minLength: 0, maxLength: 2 }),
        numberField: fc.array(filterConditionArb, { minLength: 0, maxLength: 2 }),
        booleanField: fc.array(filterConditionArb, { minLength: 0, maxLength: 2 }),
        mixedField: fc.array(filterConditionArb, { minLength: 0, maxLength: 2 }),
      })
      .filter(
        (state) =>
          state.stringField.length > 0 ||
          state.numberField.length > 0 ||
          state.booleanField.length > 0 ||
          state.mixedField.length > 0,
      );

    fc.assert(
      fc.property(mixedTypeDatasetArb, multiFieldFilterStateArb, (data, filterState) => {
        // Filter the original dataset
        const resultOriginal = filterGridData(data, filterState);

        // Pre-coerce the dataset and filter it
        const coercedData = preCoerceDataset(data);
        const resultCoerced = filterGridData(coercedData, filterState);

        // The retained row IDs should match
        const originalIds = resultOriginal.map((item) => item.id);
        const coercedIds = resultCoerced.map((item) => item.id);
        expect(originalIds).toEqual(coercedIds);
      }),
      { numRuns: 100 },
    );
  });

  it('null and undefined field values are treated equivalently to empty string', () => {
    fc.assert(
      fc.property(filterConditionArb, (condition) => {
        // Create three items: one with null, one with undefined, one with empty string
        const itemWithNull: GridItem = { id: 'null-item', value: null };
        const itemWithUndefined: GridItem = { id: 'undefined-item', value: undefined };
        const itemWithEmptyString: GridItem = { id: 'empty-item', value: '' };

        const data = [itemWithNull, itemWithUndefined, itemWithEmptyString];
        const filterState: GridFilterState = { value: [condition] };

        const result = filterGridData(data, filterState);

        // All three should either be retained together or excluded together
        // because they all coerce to '' and should behave identically
        const retainedIds = new Set(result.map((item) => item.id));
        const nullRetained = retainedIds.has('null-item');
        const undefinedRetained = retainedIds.has('undefined-item');
        const emptyRetained = retainedIds.has('empty-item');

        // All should have the same retention status
        expect(nullRetained).toBe(emptyRetained);
        expect(undefinedRetained).toBe(emptyRetained);
      }),
      { numRuns: 100 },
    );
  });

  it('numeric values are filtered by their string representation', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: -1000, max: 1000 }),
        filterTypeArb,
        fc.boolean(),
        (num, filterType, caseSensitive) => {
          const item: GridItem = { id: 'num-item', value: num };
          const stringNum = String(num);

          // Create a condition that should match based on the string representation
          const condition: GridFilterCondition = {
            type: filterType,
            value: stringNum,
            caseSensitive,
          };

          const filterState: GridFilterState = { value: [condition] };
          const result = filterGridData([item], filterState);

          // The item should be retained because its string representation matches
          // (For Equals and StartsWith with the exact string, Includes with the string)
          expect(result.length).toBe(1);
          expect(result[0].id).toBe('num-item');
        },
      ),
      { numRuns: 100 },
    );
  });

  it('boolean values are filtered by their string representation ("true" or "false")', () => {
    fc.assert(
      fc.property(fc.boolean(), filterTypeArb, (boolValue, filterType) => {
        const item: GridItem = { id: 'bool-item', value: boolValue };
        const stringBool = String(boolValue); // "true" or "false"

        // Create a condition that matches the boolean's string form
        const condition: GridFilterCondition = {
          type: filterType,
          value: stringBool,
          caseSensitive: false,
        };

        const filterState: GridFilterState = { value: [condition] };
        const result = filterGridData([item], filterState);

        // The item should be retained
        expect(result.length).toBe(1);
        expect(result[0].id).toBe('bool-item');
      }),
      { numRuns: 100 },
    );
  });

  it('type conversion is transparent: the filter sees only the string form', () => {
    // This test verifies that different types that produce the same string
    // are treated identically by the filter

    fc.assert(
      fc.property(filterConditionArb, (condition) => {
        // Create items with different types that all coerce to the same string
        // For example: number 42 and string "42"
        const itemNumber: GridItem = { id: 'number-42', value: 42 };
        const itemString: GridItem = { id: 'string-42', value: '42' };

        const data = [itemNumber, itemString];
        const filterState: GridFilterState = { value: [condition] };

        const result = filterGridData(data, filterState);
        const retainedIds = new Set(result.map((item) => item.id));

        // Both should be retained or excluded together since they coerce to the same string
        const numberRetained = retainedIds.has('number-42');
        const stringRetained = retainedIds.has('string-42');
        expect(numberRetained).toBe(stringRetained);
      }),
      { numRuns: 100 },
    );
  });

  it('mixed-type datasets filter identically to their string-coerced equivalents', () => {
    // Arbitrary that generates items with truly diverse types
    const diverseItemArb = fc
      .record({
        id: fc.uuid(),
        field: fc.oneof(
          fc.string(),
          fc.integer(),
          fc.double({ noNaN: true }),
          fc.boolean(),
          fc.constant(null),
          fc.constant(undefined),
          fc.array(fc.integer(), { minLength: 0, maxLength: 3 }).map((arr) => arr.toString()),
        ),
      })
      .map((obj) => obj as GridItem);

    const diverseDatasetArb = fc.array(diverseItemArb, { minLength: 0, maxLength: 30 });

    fc.assert(
      fc.property(diverseDatasetArb, filterConditionArb, (data, condition) => {
        const filterState: GridFilterState = { field: [condition] };

        // Filter original
        const resultOriginal = filterGridData(data, filterState);

        // Pre-coerce and filter
        const coercedData = preCoerceDataset(data);
        const resultCoerced = filterGridData(coercedData, filterState);

        // Compare by ID to verify same rows are retained
        const originalIds = resultOriginal.map((item) => item.id);
        const coercedIds = resultCoerced.map((item) => item.id);
        expect(originalIds).toEqual(coercedIds);
      }),
      { numRuns: 100 },
    );
  });
});

// Feature: grid-column-filtering, Property 8: Filter-before-sort pipeline equivalence
describe('Property 8: Filter-before-sort pipeline equivalence', () => {
  /**
   * **Validates: Requirements 7.4, 7.5**
   *
   * _For all_ datasets, filter states, and sort states,
   * `sortGridData(filterGridData(data, filter), sort)` contains exactly the rows
   * of `filterGridData(data, filter)` (same membership) arranged in the sort order —
   * no non-matching row appears in the sorted output.
   *
   * Req 7.4: WHEN both sorting and filtering are active, THE Grid SHALL apply
   * Filter_Grid_Data to the source data to produce the retained rows before applying sorting.
   *
   * Req 7.5: WHEN both sorting and filtering are active, THE Grid SHALL order only
   * the retained rows according to the active sort, excluding non-retained rows
   * from the ordered result.
   */

  /**
   * Arbitrary for generating a GridSortState.
   */
  const sortStateArb: fc.Arbitrary<GridSortState> = fc.record({
    field: fc.oneof(fc.constant(null), fc.constantFrom('name', 'value', 'status', 'amount')),
    direction: fc.oneof(
      fc.constant(null),
      fc.constant(GridSortDirection.Asc),
      fc.constant(GridSortDirection.Desc),
    ),
  });

  /**
   * Arbitrary for generating a valid (non-null field + non-null direction) sort state.
   */
  const activeSortStateArb: fc.Arbitrary<GridSortState> = fc.record({
    field: fc.constantFrom('name', 'value', 'status', 'amount'),
    direction: fc.constantFrom(GridSortDirection.Asc, GridSortDirection.Desc),
  });

  /**
   * Arbitrary for generating a GridItem with multiple fields.
   */
  const gridItemWithFieldsArb = (fields: string[]) =>
    fc.record({
      id: fc.uuid(),
      ...Object.fromEntries(fields.map((field) => [field, mixedFieldValueArb])),
    }) as fc.Arbitrary<GridItem>;

  /**
   * Arbitrary for generating an array of GridItems with multiple fields.
   */
  const gridItemsWithFieldsArb = (fields: string[]) =>
    fc.array(gridItemWithFieldsArb(fields), { minLength: 0, maxLength: 30 });

  /**
   * Arbitrary for filter state with conditions on multiple columns.
   */
  const filterStateArb = (fields: string[]): fc.Arbitrary<GridFilterState> =>
    fc
      .record(
        Object.fromEntries(
          fields.map((f) => [f, fc.array(filterConditionArb, { minLength: 0, maxLength: 3 })]),
        ),
      )
      .map((dict) => dict as GridFilterState);

  const fields = ['name', 'value', 'status', 'amount'];

  it('the sorted-filtered result contains exactly the rows from the filtered result (same membership)', () => {
    fc.assert(
      fc.property(
        gridItemsWithFieldsArb(fields),
        filterStateArb(fields),
        sortStateArb,
        (data, filterState, sortState) => {
          // Step 1: Filter the data
          const filteredData = filterGridData(data, filterState);

          // Step 2: Sort the filtered data (pipeline)
          const sortedFilteredData = sortGridData(filteredData, sortState);

          // Verify same membership: both arrays contain the same items (by id)
          const filteredIds = new Set(filteredData.map((item) => item.id));
          const sortedFilteredIds = new Set(sortedFilteredData.map((item) => item.id));

          expect(sortedFilteredIds).toEqual(filteredIds);

          // Verify same length (no duplicates introduced or items lost)
          expect(sortedFilteredData.length).toBe(filteredData.length);
        },
      ),
      { numRuns: 100 },
    );
  });

  it('no non-matching row appears in the sorted output (exclusion property)', () => {
    fc.assert(
      fc.property(
        gridItemsWithFieldsArb(fields),
        filterStateArb(fields),
        sortStateArb,
        (data, filterState, sortState) => {
          // Step 1: Filter the data
          const filteredData = filterGridData(data, filterState);
          const filteredIds = new Set(filteredData.map((item) => item.id));

          // Step 2: Sort the filtered data (pipeline)
          const sortedFilteredData = sortGridData(filteredData, sortState);

          // Step 3: Identify non-matching rows (rows that were excluded by the filter)
          const nonMatchingIds = new Set(
            data.filter((item) => !filteredIds.has(item.id)).map((item) => item.id),
          );

          // Verify no non-matching row appears in the sorted output
          for (const item of sortedFilteredData) {
            expect(nonMatchingIds.has(item.id)).toBe(false);
          }

          // Alternative check: every item in sortedFilteredData was in the filtered set
          for (const item of sortedFilteredData) {
            expect(filteredIds.has(item.id)).toBe(true);
          }
        },
      ),
      { numRuns: 100 },
    );
  });

  it('sorting preserves filtering: sort(filter(data)) has same membership as filter(data)', () => {
    fc.assert(
      fc.property(
        gridItemsWithFieldsArb(fields),
        filterConditionArb,
        activeSortStateArb,
        fc.constantFrom('name', 'value', 'status', 'amount'),
        (data, condition, sortState, filterField) => {
          const filterState: GridFilterState = { [filterField]: [condition] };

          // Filter first
          const filteredData = filterGridData(data, filterState);

          // Then sort
          const pipelineResult = sortGridData(filteredData, sortState);

          // Membership check: same items in both (order may differ)
          const filteredItemRefs = new Set(filteredData);
          const pipelineItemRefs = new Set(pipelineResult);

          expect(pipelineItemRefs).toEqual(filteredItemRefs);
        },
      ),
      { numRuns: 100 },
    );
  });

  it('pipeline result is a reordering of the filtered result (same items, possibly different order)', () => {
    fc.assert(
      fc.property(
        gridItemsWithFieldsArb(fields),
        filterStateArb(fields),
        activeSortStateArb,
        (data, filterState, sortState) => {
          const filteredData = filterGridData(data, filterState);
          const pipelineResult = sortGridData(filteredData, sortState);

          // Same length
          expect(pipelineResult.length).toBe(filteredData.length);

          // Same items (by reference, since filterGridData preserves references)
          const filteredSet = new Set(filteredData);
          for (const item of pipelineResult) {
            expect(filteredSet.has(item)).toBe(true);
          }

          // Every filtered item appears in pipeline result
          const pipelineSet = new Set(pipelineResult);
          for (const item of filteredData) {
            expect(pipelineSet.has(item)).toBe(true);
          }
        },
      ),
      { numRuns: 100 },
    );
  });

  it('sorting does not add rows that the filter excluded', () => {
    fc.assert(
      fc.property(
        gridItemsWithFieldsArb(fields),
        filterConditionArb,
        activeSortStateArb,
        (data, condition, sortState) => {
          // Use a filter that might exclude some rows
          const filterState: GridFilterState = { name: [condition] };

          const filteredData = filterGridData(data, filterState);
          const excludedRows = data.filter((item) => !filteredData.includes(item));
          const pipelineResult = sortGridData(filteredData, sortState);

          // Verify none of the excluded rows appear in the pipeline result
          for (const excludedItem of excludedRows) {
            expect(pipelineResult.includes(excludedItem)).toBe(false);
          }
        },
      ),
      { numRuns: 100 },
    );
  });

  it('with null sort (no sorting), the pipeline result equals the filtered result exactly', () => {
    fc.assert(
      fc.property(gridItemsWithFieldsArb(fields), filterStateArb(fields), (data, filterState) => {
        const nullSortState: GridSortState = { field: null, direction: null };

        const filteredData = filterGridData(data, filterState);
        const pipelineResult = sortGridData(filteredData, nullSortState);

        // With null sort, the result should be exactly the filtered data (same order)
        expect(pipelineResult).toEqual(filteredData);
      }),
      { numRuns: 100 },
    );
  });

  it('with empty filter state, the pipeline result equals sorted original data', () => {
    fc.assert(
      fc.property(gridItemsWithFieldsArb(fields), activeSortStateArb, (data, sortState) => {
        const emptyFilterState: GridFilterState = {};

        const filteredData = filterGridData(data, emptyFilterState);
        const pipelineResult = sortGridData(filteredData, sortState);

        // With empty filter, filtered data equals original data
        expect(filteredData).toBe(data);

        // Pipeline result should equal directly sorting the original data
        const directSortResult = sortGridData(data, sortState);
        expect(pipelineResult).toEqual(directSortResult);
      }),
      { numRuns: 100 },
    );
  });

  it('filter then sort does not change item references (items are the same objects)', () => {
    fc.assert(
      fc.property(
        gridItemsWithFieldsArb(fields),
        filterStateArb(fields),
        activeSortStateArb,
        (data, filterState, sortState) => {
          const filteredData = filterGridData(data, filterState);
          const pipelineResult = sortGridData(filteredData, sortState);

          // Every item in the pipeline result should be the exact same object reference
          // as an item in the original data
          for (const item of pipelineResult) {
            expect(data.includes(item)).toBe(true);
          }
        },
      ),
      { numRuns: 100 },
    );
  });
});
