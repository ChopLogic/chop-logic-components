import { GridColumn, GridFilterState, GridItem, GridRowValue, GridSortState, RenderDataItemCallback } from '../../../types';
export declare function sortGridData(data: GridItem[], sortState: GridSortState): GridItem[];
export declare function getGridRowValues({ item, columns, renderDataItem, }: {
    item: GridItem;
    columns: GridColumn[];
    renderDataItem?: RenderDataItemCallback;
}): GridRowValue[];
export declare function getNextSortState(current: GridSortState, clickedField: string): GridSortState;
export declare function filterGridData(data: GridItem[], filterState: GridFilterState): GridItem[];
