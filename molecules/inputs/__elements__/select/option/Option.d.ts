import { ChopLogicSelectValue } from '../../../../../models';
import { FC } from '../../../../../../node_modules/react';
type Props = {
    value: ChopLogicSelectValue;
    selected: boolean;
    onSelect: (id: string) => void;
    onClear: () => void;
};
export declare const SelectOption: FC<Props>;
export {};
