import { FC } from '../../../../node_modules/react';
declare const TextInputButtons: FC<{
    clearable: boolean;
    isPasswordButtonVisible: boolean;
    handleClear: () => void;
    togglePassword: () => void;
    passwordShown: boolean;
    label: string;
    disabled: boolean;
}>;
export default TextInputButtons;
