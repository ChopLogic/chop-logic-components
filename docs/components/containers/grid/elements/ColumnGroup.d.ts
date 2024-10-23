import { default as React } from '../../../../../node_modules/react';
import { ChopLogicGridColumn } from '../types';

declare const GridColumnGroup: React.FC<{
  columns: ChopLogicGridColumn[];
  selectable: boolean;
}>;
export default GridColumnGroup;
