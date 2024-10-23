import { ChopLogicGridItem } from './types';

export declare const useChopLogicGridController: ({ data, id, onSelect, }: {
    data: ChopLogicGridItem[];
    id?: string;
    onSelect?: (ids: string[]) => void;
}) => {
    elementId: string;
    isAllSelected: boolean;
    isAllCheckboxDisabled: boolean;
    selectedIds: string[];
    handleSelectAll: () => void;
    handleDeselectAll: () => void;
    handleSelectRowById: (id: string) => void;
    handleDeselectRowById: (id: string) => void;
};
