import { ChopLogicSelectValue } from '../../../../models';
import { default as React } from '../../../../../node_modules/react';
type Props = {
    options: ChopLogicSelectValue[];
    opened: boolean;
    dropdownId: string;
    comboboxId: string;
    onClose: () => void;
    selected?: ChopLogicSelectValue;
    onSelect: (id: string) => void;
    onClear: () => void;
};
export declare const SelectDropdown: React.FC<Props>;
export {};
