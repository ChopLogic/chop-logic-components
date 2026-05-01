import { SearchProps } from '../../../types';
export declare function useSearchController({ onSearch, onClear, maxLength, minLength, searchMode, debounceDelay, }: Omit<SearchProps, 'label' | 'onBlur' | 'onFocus' | 'id' | 'tabIndex' | 'className' | 'name' | 'placeholder' | 'disabled' | 'clearable' | 'spellCheck' | 'autoComplete'>): {
    searchValue: string;
    isSearchButtonVisible: boolean;
    isLabelIconVisible: boolean;
    isClearButtonVisible: boolean;
    isSearchValueValid: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleClear: () => void;
    handleSearchClick: () => void;
    handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};
