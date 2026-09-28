import { GridFilterCondition } from '../../../../types';
import { FC, RefObject } from '../../../../../node_modules/react';
export type FilterPopupProps = {
    columnTitle?: string;
    popupId: string;
    hasActiveConditions: boolean;
    columnConditions?: GridFilterCondition[];
    buttonRef?: RefObject<HTMLButtonElement | null>;
    onApply: (condition: GridFilterCondition) => void;
    onClear: () => void;
    onClose: () => void;
};
export declare const FilterPopup: FC<FilterPopupProps>;
