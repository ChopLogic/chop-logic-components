import { ChopLogicGridColumn, ChopLogicGridItem, RenderDataItemCallback } from '../../models';
import { default as React } from '../../../node_modules/react';
export declare function getGridRowValues({ item, columns, renderDataItem, }: {
    item: ChopLogicGridItem;
    columns: ChopLogicGridColumn[];
    renderDataItem?: RenderDataItemCallback;
}): (string | React.ReactElement)[];
