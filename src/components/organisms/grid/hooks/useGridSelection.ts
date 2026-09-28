import type { GridItem } from '@types';
import { useState } from 'react';

export type UseGridSelectionParams = {
  data: GridItem[];
  onSelect?: (ids: string[]) => void;
};

export type UseGridSelectionReturn = {
  selectedIds: string[];
  isAllSelected: boolean;
  isAllCheckboxDisabled: boolean;
  handleSelectAll: () => void;
  handleDeselectAll: () => void;
  handleSelectRowById: (id: string) => void;
  handleDeselectRowById: (id: string) => void;
};

export const useGridSelection = ({
  data,
  onSelect,
}: UseGridSelectionParams): UseGridSelectionReturn => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const allIds = data.map((item) => item.id);
  const isAllSelected = allIds.length === selectedIds.length;
  const isAllCheckboxDisabled = data.some((item) => item?.disabled);

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
    handleSelect([...selectedIds, id]);
  };

  const handleDeselectRowById = (id: string) => {
    handleSelect(selectedIds.filter((item) => item !== id));
  };

  return {
    selectedIds,
    isAllSelected,
    isAllCheckboxDisabled,
    handleSelectAll,
    handleDeselectAll,
    handleSelectRowById,
    handleDeselectRowById,
  };
};
