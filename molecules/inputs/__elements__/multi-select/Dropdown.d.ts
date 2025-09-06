import { ChopLogicMultiSelectValue } from '../../../../models';
import { FC } from '../../../../../node_modules/react';
type Props = {
    options: ChopLogicMultiSelectValue[];
    opened: boolean;
    dropdownId: string;
    onClose: () => void;
    onSelect: (id: string) => void;
};
export declare const MultiSelectDropdown: FC<Props>;
export {};
