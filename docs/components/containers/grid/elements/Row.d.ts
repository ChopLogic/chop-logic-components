import { default as React } from '../../../../../node_modules/react';

export type GridRowProps = {
    rowId: string;
    selectedIds: string[];
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    selectable: boolean;
    values: (string | JSX.Element)[];
    disabled?: boolean;
};
declare const GridRow: React.FC<GridRowProps>;
export default GridRow;
