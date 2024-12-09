import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTheme } from '../../../../types';

declare const GridHeaderCell: React.FC<{
    title?: string;
    component?: React.ReactElement;
    theme: ChopLogicTheme;
}>;
export default GridHeaderCell;
