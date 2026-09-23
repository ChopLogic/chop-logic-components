import type { GridSortDirection } from '@enums';
import { useElementIds } from '@hooks';
import type { GridFilterCondition, GridFilterState, GridItem, GridSortState } from '@types';
import { useState } from 'react';

import { filterGridData, getNextSortState, sortGridData } from './Grid.helpers';

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
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const allIds = data.map((item) => item.id);
  const isAllSelected = allIds.length === selectedIds.length;
  const isAllCheckboxDisabled = data.some((item) => item?.disabled);

  // Sort state management
  const isControlledSort = sortField !== undefined && sortDirection !== undefined;

  const [internalSortState, setInternalSortState] = useState<GridSortState>({
    field: null,
    direction: null,
  });

  const currentSortState: GridSortState = isControlledSort
    ? { field: sortField, direction: sortDirection }
    : internalSortState;

  const handleSortClick = (field: string) => {
    const nextState = getNextSortState(currentSortState, field);

    if (!isControlledSort) {
      setInternalSortState(nextState);
    }

    onSortChange?.(nextState);
  };

  const isControlledFilter = filterState !== undefined;

  const [internalFilterState, setInternalFilterState] = useState<GridFilterState>({});

  const currentFilterState: GridFilterState = isControlledFilter
    ? filterState
    : internalFilterState;

  const handleApplyFilter = (field: string, condition: GridFilterCondition) => {
    const next: GridFilterState = {
      ...currentFilterState,
      [field]: [...(currentFilterState[field] ?? []), condition],
    };
    if (!isControlledFilter) {
      setInternalFilterState(next);
    }
    onFilterChange?.(next);
  };

  const handleClearFilter = (field: string) => {
    if (!currentFilterState[field]?.length) return;
    const next = { ...currentFilterState };
    delete next[field];
    if (!isControlledFilter) {
      setInternalFilterState(next);
    }
    onFilterChange?.(next);
  };

  const filteredData = filterGridData(data, currentFilterState);
  const filteredAndSortedData = sortGridData(filteredData, currentSortState);

  const hasActiveFilters = Object.values(currentFilterState).some((conditions) =>
    conditions.some((condition) => condition.value.trim().length > 0),
  );
  const isEmpty = data.length > 0 && hasActiveFilters && filteredAndSortedData.length === 0;

  const handleSelect = (ids: string[]) => {
    setSelectedIds(ids);
    onSelect?.(ids);
  };

  const handleSelectAll = () => {
    handleSelect(allIds);
  };

  const handleDeselectAll = () => {
    handleSelect([]);
  };

  const handleSelectRowById = (id: string) => {
    const newIds = [...selectedIds, id];
    handleSelect(newIds);
  };

  const handleDeselectRowById = (id: string) => {
    const newIds = selectedIds.filter((item) => item !== id);
    handleSelect(newIds);
  };

  return {
    elementId,
    isAllSelected,
    isAllCheckboxDisabled,
    selectedIds,
    handleSelectAll,
    handleDeselectAll,
    handleSelectRowById,
    handleDeselectRowById,
    sortState: currentSortState,
    sortedData: filteredAndSortedData,
    handleSortClick,
    filterState: currentFilterState,
    filteredAndSortedData,
    handleApplyFilter,
    handleClearFilter,
    isEmpty,
  };
};
