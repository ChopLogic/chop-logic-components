import { default as React } from '../../../node_modules/react';
import { ChopLogicGridColumn, ChopLogicGridItem, RenderDataItemCallback } from '../../models';
export declare function getGridRowValues({ item, columns, renderDataItem, }: {
    item: ChopLogicGridItem;
    columns: ChopLogicGridColumn[];
    renderDataItem?: RenderDataItemCallback;
}): (string | React.ReactElement)[];
