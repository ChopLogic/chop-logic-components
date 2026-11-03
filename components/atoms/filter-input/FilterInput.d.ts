import { FC } from '../../../../node_modules/react';
export interface FilterInputProps {
    value: string;
    onChange: (value: string) => void;
    onClear: () => void;
    placeholder: string;
    listboxId: string;
    className?: string;
}
declare const FilterInput: FC<FilterInputProps>;
export default FilterInput;
