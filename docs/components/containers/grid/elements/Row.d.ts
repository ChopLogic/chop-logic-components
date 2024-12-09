import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTheme } from '../../../../types';

export type GridRowProps = {
    rowId: string;
    selectedIds: string[];
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    selectable: boolean;
    values: (string | React.ReactElement)[];
    disabled?: boolean;
    theme: ChopLogicTheme;
};
declare const GridRow: React.FC<GridRowProps>;
export default GridRow;
