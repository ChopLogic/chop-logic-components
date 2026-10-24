import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useFilterOptions } from '../use-filter-options';

const createOptions = (labels: string[]) => labels.map((label, index) => ({ id: index, label }));

describe('useFilterOptions', () => {
  describe('initial state', () => {
    it('returns empty filter query initially', () => {
      const options = createOptions(['Apple', 'Banana', 'Cherry']);
      const { result } = renderHook(() => useFilterOptions({ options }));

      expect(result.current.filterQuery).toBe('');
    });

    it('returns all options when query is empty', () => {
      const options = createOptions(['Apple', 'Banana', 'Cherry']);
      const { result } = renderHook(() => useFilterOptions({ options }));

      expect(result.current.filteredOptions).toEqual(options);
    });
  });

  describe('filtering behavior', () => {
    it('filters options case-insensitively', () => {
      const options = createOptions(['Apple', 'Banana', 'Cherry']);
      const { result } = renderHook(() => useFilterOptions({ options }));

      act(() => {
        result.current.setFilterQuery('app');
      });

      expect(result.current.filteredOptions).toEqual([{ id: 0, label: 'Apple' }]);
    });

    it('filters by substring match', () => {
      const options = createOptions(['Apple', 'Pineapple', 'Cherry']);
      const { result } = renderHook(() => useFilterOptions({ options }));

      act(() => {
        result.current.setFilterQuery('apple');
      });

      expect(result.current.filteredOptions).toHaveLength(2);
      expect(result.current.filteredOptions.map((o) => o.label)).toEqual(['Apple', 'Pineapple']);
    });

    it('returns empty array when no options match', () => {
      const options = createOptions(['Apple', 'Banana', 'Cherry']);
      const { result } = renderHook(() => useFilterOptions({ options }));

      act(() => {
        result.current.setFilterQuery('xyz');
      });

      expect(result.current.filteredOptions).toEqual([]);
    });

    it('treats whitespace-only query as showing all options', () => {
      const options = createOptions(['Apple', 'Banana', 'Cherry']);
      const { result } = renderHook(() => useFilterOptions({ options }));

      act(() => {
        result.current.setFilterQuery('   ');
      });

      expect(result.current.filteredOptions).toEqual(options);
    });

    it('trims filter query before matching', () => {
      const options = createOptions(['Apple', 'Banana', 'Cherry']);
      const { result } = renderHook(() => useFilterOptions({ options }));

      act(() => {
        result.current.setFilterQuery('  apple  ');
      });

      expect(result.current.filteredOptions).toEqual([{ id: 0, label: 'Apple' }]);
    });
  });

  describe('resetFilter', () => {
    it('resets filter query to empty string', () => {
      const options = createOptions(['Apple', 'Banana', 'Cherry']);
      const { result } = renderHook(() => useFilterOptions({ options }));

      act(() => {
        result.current.setFilterQuery('app');
      });

      expect(result.current.filterQuery).toBe('app');

      act(() => {
        result.current.resetFilter();
      });

      expect(result.current.filterQuery).toBe('');
      expect(result.current.filteredOptions).toEqual(options);
    });
  });

  describe('options reference stability', () => {
    it('returns same options array reference when query is empty', () => {
      const options = createOptions(['Apple', 'Banana', 'Cherry']);
      const { result } = renderHook(() => useFilterOptions({ options }));

      expect(result.current.filteredOptions).toBe(options);
    });
  });
});

// Property-Based Tests using fast-check
import * as fc from 'fast-check';

/**
 * Arbitrary for generating option objects with a label property.
 */
const optionArb = fc.record({
  id: fc.integer({ min: 0, max: 10000 }),
  label: fc.string({ minLength: 0, maxLength: 100 }),
});

/**
 * Arbitrary for generating arrays of options.
 */
const optionsArrayArb = fc.array(optionArb, { minLength: 0, maxLength: 50 });

/**
 * Arbitrary for generating filter query strings.
 */
const filterQueryArb = fc.string({ minLength: 0, maxLength: 50 });

/**
 * Arbitrary for generating whitespace-only strings.
 */
const whitespaceOnlyArb = fc.oneof(
  fc.constant(''),
  fc.constant(' '),
  fc.constant('  '),
  fc.constant('   '),
  fc.constant('\t'),
  fc.constant('\n'),
  fc.constant('  \t  '),
  fc.constant('\n\t\n'),
);

describe('useFilterOptions - Property-Based Tests', () => {
  /**
   * **Validates: Requirements 4.1, 9.3**
   *
   * Property 1: Filter Subset Invariant
   * _For any_ options array and any filter query, the filtered options SHALL be
   * a subset of the original options (every filtered option exists in the original array).
   */
  describe('Property 1: Filter Subset Invariant', () => {
    it('filtered options are always a subset of original options', () => {
      fc.assert(
        fc.property(optionsArrayArb, filterQueryArb, (options, query) => {
          const { result } = renderHook(() => useFilterOptions({ options }));

          act(() => {
            result.current.setFilterQuery(query);
          });

          const filteredOptions = result.current.filteredOptions;

          // Every filtered option must exist in the original options array
          for (const filteredOption of filteredOptions) {
            const existsInOriginal = options.some(
              (original) =>
                original.id === filteredOption.id && original.label === filteredOption.label,
            );
            expect(existsInOriginal).toBe(true);
          }

          // Filtered options length should never exceed original options length
          expect(filteredOptions.length).toBeLessThanOrEqual(options.length);
        }),
        { numRuns: 100 },
      );
    });
  });

  /**
   * **Validates: Requirements 4.1, 9.3**
   *
   * Property 2: Case-Insensitive Match Correctness
   * _For any_ option with label L and any filter query Q, the option is included
   * in filtered results if and only if L.toLowerCase().includes(Q.trim().toLowerCase()) returns true.
   */
  describe('Property 2: Case-Insensitive Match Correctness', () => {
    it('options included iff label.toLowerCase().includes(query.trim().toLowerCase())', () => {
      fc.assert(
        fc.property(optionsArrayArb, filterQueryArb, (options, query) => {
          const { result } = renderHook(() => useFilterOptions({ options }));

          act(() => {
            result.current.setFilterQuery(query);
          });

          const filteredOptions = result.current.filteredOptions;
          const trimmedQuery = query.trim().toLowerCase();

          // If query is empty or whitespace-only, all options should be returned
          if (trimmedQuery === '') {
            expect(filteredOptions).toEqual(options);
            return;
          }

          // For each original option, verify the inclusion is correct
          for (const option of options) {
            const shouldBeIncluded = option.label.toLowerCase().includes(trimmedQuery);
            const isIncluded = filteredOptions.some(
              (filtered) => filtered.id === option.id && filtered.label === option.label,
            );

            expect(isIncluded).toBe(shouldBeIncluded);
          }
        }),
        { numRuns: 100 },
      );
    });
  });

  /**
   * **Validates: Requirements 4.3, 9.6**
   *
   * Property 3: Empty Query Identity
   * _For any_ options array, when the filter query is empty or contains only whitespace,
   * the filtered options SHALL equal the original options array (identity property).
   */
  describe('Property 3: Empty Query Identity', () => {
    it('empty or whitespace query returns all options unchanged', () => {
      fc.assert(
        fc.property(optionsArrayArb, whitespaceOnlyArb, (options, whitespaceQuery) => {
          const { result } = renderHook(() => useFilterOptions({ options }));

          act(() => {
            result.current.setFilterQuery(whitespaceQuery);
          });

          const filteredOptions = result.current.filteredOptions;

          // Should return all original options
          expect(filteredOptions).toEqual(options);

          // Should maintain reference equality for optimization
          expect(filteredOptions).toBe(options);
        }),
        { numRuns: 100 },
      );
    });

    it('empty string query returns all options unchanged', () => {
      fc.assert(
        fc.property(optionsArrayArb, (options) => {
          const { result } = renderHook(() => useFilterOptions({ options }));

          // Initial state should have empty query
          expect(result.current.filterQuery).toBe('');
          expect(result.current.filteredOptions).toEqual(options);
          expect(result.current.filteredOptions).toBe(options);
        }),
        { numRuns: 100 },
      );
    });
  });

  /**
   * **Validates: Requirements 9.7, 6.1, 6.2**
   *
   * Property 4: Filter Reset Round-Trip
   * _For any_ options array, applying any filter and then calling resetFilter
   * SHALL return the original options array unchanged.
   */
  describe('Property 4: Filter Reset Round-Trip', () => {
    it('applying filter then resetFilter returns original options', () => {
      fc.assert(
        fc.property(optionsArrayArb, filterQueryArb, (options, query) => {
          const { result } = renderHook(() => useFilterOptions({ options }));

          // Apply a filter
          act(() => {
            result.current.setFilterQuery(query);
          });

          // Reset the filter
          act(() => {
            result.current.resetFilter();
          });

          // After reset, filter query should be empty
          expect(result.current.filterQuery).toBe('');

          // After reset, filtered options should equal original options
          expect(result.current.filteredOptions).toEqual(options);

          // Should maintain reference equality
          expect(result.current.filteredOptions).toBe(options);
        }),
        { numRuns: 100 },
      );
    });

    it('multiple filter-reset cycles always return to original state', () => {
      fc.assert(
        fc.property(
          optionsArrayArb,
          fc.array(filterQueryArb, { minLength: 1, maxLength: 5 }),
          (options, queries) => {
            const { result } = renderHook(() => useFilterOptions({ options }));

            // Apply multiple filter-reset cycles
            for (const query of queries) {
              act(() => {
                result.current.setFilterQuery(query);
              });

              act(() => {
                result.current.resetFilter();
              });

              // After each reset, should return to original state
              expect(result.current.filterQuery).toBe('');
              expect(result.current.filteredOptions).toEqual(options);
            }
          },
        ),
        { numRuns: 100 },
      );
    });
  });
});
