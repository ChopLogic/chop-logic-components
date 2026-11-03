import { MultiSelectValue } from '../../../types';
import { FC } from '../../../../node_modules/react';
type Props = {
    options: MultiSelectValue[];
    opened: boolean;
    dropdownId: string;
    onClose: () => void;
    onSelect: (id: string) => void;
    isSearchable?: boolean;
    searchPlaceholder?: string;
    filterQuery?: string;
    onFilterChange?: (value: string) => void;
    onFilterReset?: () => void;
};
export declare const MultiSelectDropdown: FC<Props>;
export {};
