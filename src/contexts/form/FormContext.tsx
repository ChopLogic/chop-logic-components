import { ChopLogicFormData, ChopLogicFormInputParams } from '@models';
import { createContext } from 'react';

export interface FormContextProps {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
}

export const FormContext = createContext<FormContextProps>({});
