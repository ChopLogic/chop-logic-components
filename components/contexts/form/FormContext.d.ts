import { FormInputParams, FormValues } from '../../../types';
export interface FormContextProps {
    onChangeFormInput?: (params: FormInputParams) => void;
    initialValues?: FormValues;
    resetSignal?: number;
}
export declare const FormContext: import('../../../../node_modules/react').Context<FormContextProps>;
