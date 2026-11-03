export type UseDropdownSearchParams = {
    optionsCount: number;
    opened: boolean;
    isSearchable: boolean;
    filterQuery: string;
    onFilterChange?: (value: string) => void;
    onFilterReset?: () => void;
};
export type UseDropdownSearchReturn = {
    ariaLiveMessage: string;
    hasNoMatchingOptions: boolean;
    handleFilterChange: (value: string) => void;
    handleFilterClear: () => void;
};
export declare const useDropdownSearch: ({ optionsCount, opened, isSearchable, filterQuery, onFilterChange, onFilterReset, }: UseDropdownSearchParams) => UseDropdownSearchReturn;
