import { ChopLogicMultiSelectValue } from '../../../models';
import { default as React } from '../../../../node_modules/react';
type Props = {
    value: ChopLogicMultiSelectValue;
    onSelect: (id: string) => void;
};
export declare const MultiSelectOption: React.FC<Props>;
export {};
