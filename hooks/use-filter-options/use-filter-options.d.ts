export interface UseFilterOptionsParams<T extends {
    label: string;
}> {
    options: T[];
}
export interface UseFilterOptionsReturn<T> {
    filterQuery: string;
    filteredOptions: T[];
    setFilterQuery: (query: string) => void;
    resetFilter: () => void;
}
export declare const useFilterOptions: <T extends {
    label: string;
}>({ options, }: UseFilterOptionsParams<T>) => UseFilterOptionsReturn<T>;
