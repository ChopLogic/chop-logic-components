import { ChangeEvent, ChangeEventHandler } from '../../../../node_modules/react';
export declare function useChopLogicCheckboxController({ name, defaultChecked, onChange, }: {
    name: string;
    defaultChecked?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}): {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
};
