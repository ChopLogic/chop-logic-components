import { GridColumn, GridItem, GridRowValue, RenderDataItemCallback } from '../../../types';
export declare function getGridRowValues({ item, columns, renderDataItem, }: {
    item: GridItem;
    columns: GridColumn[];
    renderDataItem?: RenderDataItemCallback;
}): GridRowValue[];
