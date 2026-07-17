import { FormInputParams, FormValues } from '../../../types';
export interface FormContextProps {
    onChangeFormInput?: (params: FormInputParams) => void;
    initialValues?: FormValues;
    resetSignal?: number;
    isPending?: boolean;
}
export declare const FormContext: import('../../../../node_modules/react').Context<FormContextProps>;
