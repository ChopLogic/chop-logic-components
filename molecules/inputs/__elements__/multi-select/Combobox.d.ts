import { ChopLogicMultiSelectValue } from '../../../../models';
import { FC } from '../../../../../node_modules/react';
type Props = {
    opened: boolean;
    disabled: boolean;
    required: boolean;
    onClick: () => void;
    comboboxId: string;
    dropdownId: string;
    values?: ChopLogicMultiSelectValue[];
    placeholder?: string;
    name: string;
};
export declare const MultiSelectCombobox: FC<Props>;
export {};
