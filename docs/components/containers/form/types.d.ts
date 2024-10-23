import { PropsWithChildren } from '../../../../node_modules/react';

export type ChopLogicFormData = {
    [key: string]: unknown;
};
export type ChopLogicFormValidationState = [string, boolean][];
export type ChopLogicFormInput = HTMLInputElement | HTMLSelectElement;
export type ChopLogicFormInputParams = {
    name: string;
    value: unknown;
    valid?: boolean;
};
export type ChopLogicFormContextProps = {
    onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
    initialValues?: ChopLogicFormData;
    resetSignal?: number;
};
export type ChopLogicFormProps = PropsWithChildren & React.HTMLAttributes<HTMLFormElement> & {
    columns?: number;
    initialValues?: ChopLogicFormData;
    hasReset?: boolean;
    onClickSubmit?: (data: ChopLogicFormData) => void;
};
