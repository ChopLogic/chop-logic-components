import { GridItem } from '../../../../types';
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
export declare const useGridSelection: ({ data, onSelect, }: UseGridSelectionParams) => UseGridSelectionReturn;
