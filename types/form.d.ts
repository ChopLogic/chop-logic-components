import { FormEventHandler, PropsWithChildren } from '../../node_modules/react';
import { ChopLogicComponentProps } from './_common';
export type FormValues = {
    [key: string]: unknown;
};
export type FormValidationState = [string, boolean][];
export interface FormInputParams {
    name: string;
    value: unknown;
    valid?: boolean;
}
export interface FormProps<TActionState = void> extends PropsWithChildren, ChopLogicComponentProps {
    initialValues?: FormValues;
    hasReset?: boolean;
    resetOnSuccess?: boolean;
    action?: (prevState: TActionState, formData: FormData) => TActionState | Promise<TActionState>;
    actionInitialState?: TActionState;
    onActionComplete?: (state: TActionState) => void;
    onSubmit?: (data: FormValues) => void | Promise<void>;
    onReset?: FormEventHandler<HTMLFormElement>;
}
