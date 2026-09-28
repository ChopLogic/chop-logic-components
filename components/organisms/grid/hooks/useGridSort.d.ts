import { GridSortDirection } from '../../../../enums';
import { GridSortState } from '../../../../types';
export type UseGridSortParams = {
    sortField?: string | null;
    sortDirection?: GridSortDirection | null;
    onSortChange?: (state: GridSortState) => void;
};
export type UseGridSortReturn = {
    sortState: GridSortState;
    handleSortClick: (field: string) => void;
};
export declare const useGridSort: ({ sortField, sortDirection, onSortChange, }: UseGridSortParams) => UseGridSortReturn;
