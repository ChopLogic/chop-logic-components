import { useEffect, useState } from 'react';

import { useDebounce } from '../use-debounce/use-debounce';

const ARIA_LIVE_DEBOUNCE_MS = 300;

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

export const useDropdownSearch = ({
  optionsCount,
  opened,
  isSearchable,
  filterQuery,
  onFilterChange,
  onFilterReset,
}: UseDropdownSearchParams): UseDropdownSearchReturn => {
  const [ariaLiveMessage, setAriaLiveMessage] = useState('');
  const debouncedFilterQuery = useDebounce(filterQuery, ARIA_LIVE_DEBOUNCE_MS);

  const hasNoMatchingOptions = optionsCount === 0 && filterQuery.trim().length > 0;

  useEffect(() => {
    // Wait until the debounce settles before announcing
    if (filterQuery !== debouncedFilterQuery) {
      return;
    }

    if (!opened || !isSearchable || debouncedFilterQuery.trim().length === 0) {
      setAriaLiveMessage('');
      return;
    }

    setAriaLiveMessage(
      optionsCount === 0
        ? 'No matching options'
        : `${optionsCount} option${optionsCount === 1 ? '' : 's'} available`,
    );
  }, [debouncedFilterQuery, optionsCount, opened, isSearchable, filterQuery]);

  const handleFilterChange = (value: string) => {
    onFilterChange?.(value);
  };

  const handleFilterClear = () => {
    onFilterReset?.();
  };

  return { ariaLiveMessage, hasNoMatchingOptions, handleFilterChange, handleFilterClear };
};
