import { GridFilterCondition, GridFilterState } from '../../../../types';
export type UseGridFilterParams = {
    filterState?: GridFilterState;
    onFilterChange?: (state: GridFilterState) => void;
};
export type UseGridFilterReturn = {
    filterState: GridFilterState;
    handleApplyFilter: (field: string, condition: GridFilterCondition) => void;
    handleClearFilter: (field: string) => void;
};
export declare const useGridFilter: ({ filterState, onFilterChange, }: UseGridFilterParams) => UseGridFilterReturn;
