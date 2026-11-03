import { SelectValue } from '../../../../types';
import { FC, ReactNode } from '../../../../../node_modules/react';
type Props = {
    options: SelectValue[];
    opened: boolean;
    dropdownId: string;
    onClose: () => void;
    isSearchable?: boolean;
    searchPlaceholder?: string;
    filterQuery?: string;
    onFilterChange?: (value: string) => void;
    onFilterReset?: () => void;
    children: ReactNode;
};
export declare const DropdownList: FC<Props>;
export {};
