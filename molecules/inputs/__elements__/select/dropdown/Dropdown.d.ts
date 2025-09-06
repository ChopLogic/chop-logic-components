import { ChopLogicSelectValue } from '../../../../../models';
import { FC } from '../../../../../../node_modules/react';
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
export declare const SelectDropdown: FC<Props>;
export {};
