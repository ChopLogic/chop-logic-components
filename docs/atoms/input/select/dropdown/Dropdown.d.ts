import { default as React } from '../../../../../node_modules/react';
import { ChopLogicSelectValue } from '../../../../models';
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
