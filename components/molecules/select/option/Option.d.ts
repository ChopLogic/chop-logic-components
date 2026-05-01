import { SelectValue } from '../../../../types';
import { FC } from '../../../../../node_modules/react';
type Props = {
    value: SelectValue;
    selected: boolean;
    onSelect: (id: string) => void;
    onClear: () => void;
};
export declare const SelectOption: FC<Props>;
export {};
