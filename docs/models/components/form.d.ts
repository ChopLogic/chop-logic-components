import { FormEventHandler, PropsWithChildren } from '../../../node_modules/react';
import { ChopLogicComponentProps } from '../common.ts';
export type ChopLogicFormData = {
    [key: string]: unknown;
};
export type ChopLogicFormValidationState = [string, boolean][];
export interface ChopLogicFormInputParams {
    name: string;
    value: unknown;
    valid?: boolean;
}
export interface ChopLogicFormProps extends PropsWithChildren, ChopLogicComponentProps {
    columns?: number;
    initialValues?: ChopLogicFormData;
    hasReset?: boolean;
    onClickSubmit?: (data: ChopLogicFormData) => void;
    onReset?: FormEventHandler<HTMLFormElement>;
    onSubmit?: FormEventHandler<HTMLFormElement>;
}
