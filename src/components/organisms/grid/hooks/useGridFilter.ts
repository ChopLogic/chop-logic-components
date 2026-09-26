import type { GridFilterCondition, GridFilterState } from '@types';
import { useState } from 'react';

export type UseGridFilterParams = {
  filterState?: GridFilterState;
  onFilterChange?: (state: GridFilterState) => void;
};

export type UseGridFilterReturn = {
  filterState: GridFilterState;
  handleApplyFilter: (field: string, condition: GridFilterCondition) => void;
  handleClearFilter: (field: string) => void;
};

export const useGridFilter = ({
  filterState,
  onFilterChange,
}: UseGridFilterParams): UseGridFilterReturn => {
  const isControlled = filterState !== undefined;

  const [internalFilterState, setInternalFilterState] = useState<GridFilterState>({});

  const currentFilterState: GridFilterState = isControlled ? filterState : internalFilterState;

  const handleApplyFilter = (field: string, condition: GridFilterCondition) => {
    const next: GridFilterState = {
      ...currentFilterState,
      [field]: [...(currentFilterState[field] ?? []), condition],
    };

    if (!isControlled) {
      setInternalFilterState(next);
    }

    onFilterChange?.(next);
  };

  const handleClearFilter = (field: string) => {
    if (!currentFilterState[field]?.length) return;

    const next = { ...currentFilterState };
    delete next[field];

    if (!isControlled) {
      setInternalFilterState(next);
    }

    onFilterChange?.(next);
  };

  return {
    filterState: currentFilterState,
    handleApplyFilter,
    handleClearFilter,
  };
};
