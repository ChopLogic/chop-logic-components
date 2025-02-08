import { ChopLogicSelectValue } from '../../../models';
export declare function useChopLogicSelectController({ name, defaultValue, onChange, options, }: {
    name: string;
    defaultValue?: string | number | readonly string[];
    onChange?: (value?: ChopLogicSelectValue) => void;
    options: ChopLogicSelectValue[];
}): {
    selected: ChopLogicSelectValue | undefined;
    opened: boolean;
    handleClear: () => void;
    handleClose: () => void;
    handleToggle: () => void;
    handleSelect: (id: string) => void;
};
