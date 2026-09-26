import type { GridSortDirection } from '@enums';
import type { GridSortState } from '@types';
import { useState } from 'react';

import { getNextSortState } from '../Grid.helpers';

export type UseGridSortParams = {
  sortField?: string;
  sortDirection?: GridSortDirection;
  onSortChange?: (state: GridSortState) => void;
};

export type UseGridSortReturn = {
  sortState: GridSortState;
  handleSortClick: (field: string) => void;
};

export const useGridSort = ({
  sortField,
  sortDirection,
  onSortChange,
}: UseGridSortParams): UseGridSortReturn => {
  const isControlled = sortField !== undefined && sortDirection !== undefined;

  const [internalSortState, setInternalSortState] = useState<GridSortState>({
    field: null,
    direction: null,
  });

  const sortState: GridSortState = isControlled
    ? { field: sortField, direction: sortDirection }
    : internalSortState;

  const handleSortClick = (field: string) => {
    const nextState = getNextSortState(sortState, field);

    if (!isControlled) {
      setInternalSortState(nextState);
    }

    onSortChange?.(nextState);
  };

  return {
    sortState,
    handleSortClick,
  };
};
