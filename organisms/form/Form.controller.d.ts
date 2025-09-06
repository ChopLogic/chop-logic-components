import { ChopLogicFormData, ChopLogicFormInputParams } from '../../models';
import { FormEvent, FormEventHandler } from '../../../node_modules/react';
export declare function useChopLogicFormController({ initialValues, onReset, onSubmit, onClickSubmit, }: {
    initialValues?: ChopLogicFormData;
    onReset?: FormEventHandler<HTMLFormElement>;
    onSubmit?: FormEventHandler<HTMLFormElement>;
    onClickSubmit?: (data: ChopLogicFormData) => void;
}): {
    handleInputChange: (params: ChopLogicFormInputParams) => void;
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    handleReset: (event: FormEvent<HTMLFormElement>) => void;
    resetSignal: number;
    valid: boolean;
};
