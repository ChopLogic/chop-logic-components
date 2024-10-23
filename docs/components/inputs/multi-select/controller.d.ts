import { SelectValue } from '../select/types';
import { MultiSelectValue } from './types';

export declare function useChopLogicMultiSelectController({ name, defaultValue, onChange, options, }: {
    name: string;
    defaultValue?: string | number | readonly string[];
    onChange?: (values?: SelectValue[]) => void;
    options: SelectValue[];
}): {
    handleClose: () => void;
    handleToggle: () => void;
    handleSelect: (id: string) => void;
    opened: boolean;
    values: MultiSelectValue[];
};
