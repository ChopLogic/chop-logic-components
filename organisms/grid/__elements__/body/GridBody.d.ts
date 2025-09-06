import { ChopLogicGridColumn, ChopLogicGridItem, RenderDataItemCallback } from '../../../../models';
import { FC } from '../../../../../node_modules/react';
type Props = {
    data: ChopLogicGridItem[];
    columns: ChopLogicGridColumn[];
    selectedIds: string[];
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    renderDataItem?: RenderDataItemCallback;
    selectable: boolean;
};
export declare const GridBody: FC<Props>;
export {};
