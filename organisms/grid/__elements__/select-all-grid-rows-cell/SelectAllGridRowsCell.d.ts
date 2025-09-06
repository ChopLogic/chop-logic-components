import { FC } from '../../../../../node_modules/react';
type Props = {
    gridId: string;
    isAllSelected: boolean;
    selectAll: () => void;
    deselectAll: () => void;
    disabled?: boolean;
};
export declare const SelectAllGridRowsCell: FC<Props>;
export {};
