import { FC } from '../../../../../node_modules/react';
type Props = {
    rowId: string;
    isRowSelected: boolean;
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    disabled?: boolean;
};
export declare const SelectGridRowCell: FC<Props>;
export {};
