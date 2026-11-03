import { useMemo, useState } from 'react';

export interface UseFilterOptionsParams<T extends { label: string }> {
  options: T[];
}

export interface UseFilterOptionsReturn<T> {
  filterQuery: string;
  filteredOptions: T[];
  setFilterQuery: (query: string) => void;
  resetFilter: () => void;
}

export const useFilterOptions = <T extends { label: string }>({
  options,
}: UseFilterOptionsParams<T>): UseFilterOptionsReturn<T> => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredOptions = useMemo(() => {
    const trimmedQuery = filterQuery.trim();

    if (trimmedQuery === '') {
      return options;
    }

    const lowerQuery = trimmedQuery.toLowerCase();
    return options.filter((option) => option.label.toLowerCase().includes(lowerQuery));
  }, [options, filterQuery]);

  const resetFilter = () => {
    setFilterQuery('');
  };

  return {
    filterQuery,
    filteredOptions,
    setFilterQuery,
    resetFilter,
  };
};
