import { SelectValue } from './types';

export declare function useChopLogicSelectController({ name, defaultValue, onChange, options, }: {
    name: string;
    defaultValue?: string | number | readonly string[];
    onChange?: (value?: SelectValue) => void;
    options: SelectValue[];
}): {
    selected: SelectValue | undefined;
    opened: boolean;
    handleClear: () => void;
    handleClose: () => void;
    handleToggle: () => void;
    handleSelect: (id: string) => void;
};
