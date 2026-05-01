import { GridColumn, GridItem, RenderDataItemCallback } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
type Props = {
    data: GridItem[];
    columns: GridColumn[];
    selectedIds: string[];
    selectRowById: (id: string) => void;
    deselectRowById: (id: string) => void;
    renderDataItem?: RenderDataItemCallback;
    selectable: boolean;
};
export declare const GridBody: FC<Props>;
export {};
