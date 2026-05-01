import { MultiSelectValue } from '../../../types';
import { FC } from '../../../../node_modules/react';
type Props = {
    value: MultiSelectValue;
    onSelect: (id: string) => void;
};
export declare const MultiSelectOption: FC<Props>;
export {};
