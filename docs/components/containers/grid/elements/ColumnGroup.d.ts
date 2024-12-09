import { default as React } from '../../../../../node_modules/react';
import { ChopLogicGridColumn, ChopLogicTheme } from '../../../../types';

declare const GridColumnGroup: React.FC<{
    columns: ChopLogicGridColumn[];
    selectable: boolean;
    theme: ChopLogicTheme;
}>;
export default GridColumnGroup;
