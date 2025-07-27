import { ChopLogicSelectValue } from '../../../../models';
import { default as React } from '../../../../../node_modules/react';
type Props = {
    value: ChopLogicSelectValue;
    selected: boolean;
    onSelect: (id: string) => void;
    onClear: () => void;
};
export declare const SelectOption: React.FC<Props>;
export {};
