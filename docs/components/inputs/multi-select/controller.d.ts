import { ChopLogicMultiSelectValue, ChopLogicSelectValue } from '../../../models';

export declare function useChopLogicMultiSelectController({ name, defaultValue, onChange, options, }: {
    name: string;
    defaultValue?: string | number | readonly string[];
    onChange?: (values?: ChopLogicSelectValue[]) => void;
    options: ChopLogicSelectValue[];
}): {
    handleClose: () => void;
    handleToggle: () => void;
    handleSelect: (id: string) => void;
    opened: boolean;
    values: ChopLogicMultiSelectValue[];
};
