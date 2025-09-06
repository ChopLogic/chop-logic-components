import { ChopLogicMultiSelectValue } from '../../../../models';
import { FC } from '../../../../../node_modules/react';
type Props = {
    value: ChopLogicMultiSelectValue;
    onSelect: (id: string) => void;
};
export declare const MultiSelectOption: FC<Props>;
export {};
