import { ChopLogicGridColumn, ChopLogicGridItem, RenderDataItemCallback } from './types';

export declare function getGridRowValues({ item, columns, renderDataItem, }: {
    item: ChopLogicGridItem;
    columns: ChopLogicGridColumn[];
    renderDataItem?: RenderDataItemCallback;
}): (string | JSX.Element)[];
