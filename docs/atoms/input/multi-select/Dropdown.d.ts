import { default as React } from '../../../../node_modules/react';
import { ChopLogicMultiSelectValue } from '../../../models';
type Props = {
    options: ChopLogicMultiSelectValue[];
    opened: boolean;
    dropdownId: string;
    onClose: () => void;
    onSelect: (id: string) => void;
};
export declare const MultiSelectDropdown: React.FC<Props>;
export {};
