import { useState } from 'react';
import { useElementIds } from 'hooks/use-element-ids';

import { ChopLogicGridItem } from './types';

export const useChopLogicGridController = ({
  data,
  id,
  onSelect,
}: {
  data: ChopLogicGridItem[];
  id?: string;
  onSelect?: (ids: string[]) => void;
}) => {
  const { elementId } = useElementIds(id);
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
  };
};
