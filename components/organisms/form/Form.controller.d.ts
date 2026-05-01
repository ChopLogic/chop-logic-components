import { FormInputParams, FormValues } from '../../../types';
import { FormEvent, FormEventHandler } from '../../../../node_modules/react';
export declare function useFormController({ initialValues, onReset, onSubmit, onClickSubmit, }: {
    initialValues?: FormValues;
    onReset?: FormEventHandler<HTMLFormElement>;
    onSubmit?: FormEventHandler<HTMLFormElement>;
    onClickSubmit?: (data: FormValues) => void;
}): {
    handleInputChange: (params: FormInputParams) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    handleReset: (event: FormEvent<HTMLFormElement>) => void;
    resetSignal: number;
    valid: boolean;
};
