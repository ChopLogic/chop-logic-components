import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTheme } from '../../../../models';
type ChopLogicGridCheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    theme: ChopLogicTheme;
};
declare const GridCheckbox: React.FC<ChopLogicGridCheckboxProps>;
export default GridCheckbox;
