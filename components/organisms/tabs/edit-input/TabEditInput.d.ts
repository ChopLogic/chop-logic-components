import { FC } from '../../../../../node_modules/react';
type Props = {
    tabId: string;
    isEditMode: boolean;
    editValue: string;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onSave: () => void;
    onCancel: () => void;
    cancelButtonId: string;
};
export declare const TabEditInput: FC<Props>;
export {};
