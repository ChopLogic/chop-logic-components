import { GridItem } from '../../../types';
export declare const useGridController: ({ data, id, onSelect, }: {
    data: GridItem[];
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
