import { default as React } from '../../../../node_modules/react';
type Props = {
    rowId: string;
    selectedIds: string[];
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    selectable: boolean;
    values: (string | React.ReactElement)[];
    disabled?: boolean;
};
export declare const GridRow: React.FC<Props>;
export {};
