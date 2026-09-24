import type { GridSortDirection } from '@enums';
import { useElementIds } from '@hooks';
import type { GridFilterState, GridItem, GridSortState } from '@types';

import { filterGridData, sortGridData } from './Grid.helpers';
import { useGridFilter } from './hooks/useGridFilter';
import { useGridSelection } from './hooks/useGridSelection';
import { useGridSort } from './hooks/useGridSort';

export const useGridController = ({
  data,
  id,
  onSelect,
  sortField,
  sortDirection,
  onSortChange,
  filterState,
  onFilterChange,
}: {
  data: GridItem[];
  id?: string;
  onSelect?: (ids: string[]) => void;
  sortField?: string;
  sortDirection?: GridSortDirection;
  onSortChange?: (state: GridSortState) => void;
  filterState?: GridFilterState;
  onFilterChange?: (state: GridFilterState) => void;
}) => {
  const { elementId } = useElementIds(id);

  const selection = useGridSelection({ data, onSelect });
  const sort = useGridSort({ sortField, sortDirection, onSortChange });
  const filter = useGridFilter({ filterState, onFilterChange });

  // Data pipeline: filter first, then sort the retained rows.
  const filteredData = filterGridData(data, filter.filterState);
  const filteredAndSortedData = sortGridData(filteredData, sort.sortState);

  const hasActiveFilters = Object.values(filter.filterState).some((conditions) =>
    conditions.some((condition) => condition.value.trim().length > 0),
  );
  const isEmpty = data.length > 0 && hasActiveFilters && filteredAndSortedData.length === 0;

  return {
    elementId,

    // Selection
    isAllSelected: selection.isAllSelected,
    isAllCheckboxDisabled: selection.isAllCheckboxDisabled,
    selectedIds: selection.selectedIds,
    handleSelectAll: selection.handleSelectAll,
    handleDeselectAll: selection.handleDeselectAll,
    handleSelectRowById: selection.handleSelectRowById,
    handleDeselectRowById: selection.handleDeselectRowById,

    // Sorting
    sortState: sort.sortState,
    handleSortClick: sort.handleSortClick,
    sortedData: filteredAndSortedData,

    // Filtering
    filterState: filter.filterState,
    handleApplyFilter: filter.handleApplyFilter,
    handleClearFilter: filter.handleClearFilter,

    // Derived data
    filteredAndSortedData,
    isEmpty,
  };
};
