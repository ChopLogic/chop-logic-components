import { KeyboardEvent } from '../../../../node_modules/react';
export declare function useSwitchController({ name, defaultChecked, onChange, }: {
    name: string;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}): {
    checked: boolean;
    handleChange: (checked: boolean) => void;
    handleKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
};
