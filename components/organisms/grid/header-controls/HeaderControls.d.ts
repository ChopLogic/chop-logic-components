import { GridSortDirection } from '../../../../enums';
import { FC, RefObject } from '../../../../../node_modules/react';
export type HeaderControlsProps = {
    columnTitle?: string;
    hasSortButton: boolean;
    sortDirection?: GridSortDirection | null;
    onSortClick?: () => void;
    hasFilterButton: boolean;
    isFilterActive: boolean;
    isFilterOpen: boolean;
    filterButtonRef: RefObject<HTMLButtonElement | null>;
    onFilterToggle: () => void;
};
export declare const HeaderControls: FC<HeaderControlsProps>;
