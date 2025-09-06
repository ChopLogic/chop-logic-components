import { FC, ReactElement } from '../../../../../node_modules/react';
type Props = {
    rowId: string;
    selectedIds: string[];
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    selectable: boolean;
    values: (string | ReactElement)[];
    disabled?: boolean;
};
export declare const GridRow: FC<Props>;
export {};
