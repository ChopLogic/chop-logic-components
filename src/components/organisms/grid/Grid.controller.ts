import type { GridSortDirection } from '@enums';
import { useElementIds } from '@hooks';
import type { GridItem, GridSortState } from '@types';
import { useState } from 'react';

import { getNextSortState, sortGridData } from './Grid.helpers';

export const useGridController = ({
  data,
  id,
  onSelect,
  sortField,
  sortDirection,
  onSortChange,
}: {
  data: GridItem[];
  id?: string;
  onSelect?: (ids: string[]) => void;
  sortField?: string;
  sortDirection?: GridSortDirection;
  onSortChange?: (state: GridSortState) => void;
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

  const sortedData = sortGridData(data, currentSortState);

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
    sortedData,
    handleSortClick,
  };
};
