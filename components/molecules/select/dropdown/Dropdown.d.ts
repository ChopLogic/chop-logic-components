import { SelectValue } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
type Props = {
    options: SelectValue[];
    opened: boolean;
    dropdownId: string;
    comboboxId: string;
    onClose: () => void;
    selected?: SelectValue;
    onSelect: (id: string) => void;
    onClear: () => void;
    isSearchable?: boolean;
    searchPlaceholder?: string;
    filterQuery?: string;
    onFilterChange?: (value: string) => void;
    onFilterReset?: () => void;
};
export declare const SelectDropdown: FC<Props>;
export {};
