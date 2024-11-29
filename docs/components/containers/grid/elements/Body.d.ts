import { default as React } from '../../../../../node_modules/react';
import { ChopLogicGridColumn, ChopLogicGridItem, RenderDataItemCallback } from '../../../../types';

type ChopLogicGridBodyProps = {
    data: ChopLogicGridItem[];
    columns: ChopLogicGridColumn[];
    selectedIds: string[];
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    renderDataItem?: RenderDataItemCallback;
    selectable: boolean;
};
declare const ChopLogicGridBody: React.FC<ChopLogicGridBodyProps>;
export default ChopLogicGridBody;
