import { FormInputParams, FormValues } from '../../../types';
import { SubmitEvent, SubmitEventHandler } from '../../../../node_modules/react';
interface UseFormControllerParams<TActionState = void> {
    initialValues?: FormValues;
    resetOnSuccess?: boolean;
    onReset?: SubmitEventHandler<HTMLFormElement>;
    action?: (prevState: TActionState, formData: FormData) => TActionState | Promise<TActionState>;
    actionInitialState?: TActionState;
    onActionComplete?: (state: TActionState) => void;
    onSubmit?: (data: FormValues) => void | Promise<void>;
}
interface UseFormControllerReturn {
    handleInputChange: (params: FormInputParams) => void;
    handleReset: (event: SubmitEvent<HTMLFormElement>) => void;
    resetSignal: number;
    valid: boolean;
    isPending: boolean;
    formAction?: (formData: FormData) => void;
    handleSubmit?: (event: SubmitEvent<HTMLFormElement>) => void;
}
export declare function useFormController<TActionState = void>({ initialValues, resetOnSuccess, onReset, action, actionInitialState, onActionComplete, onSubmit, }: UseFormControllerParams<TActionState>): UseFormControllerReturn;
export {};
