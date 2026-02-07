import type { FormInputParams, FormValues } from '@types';
import { createContext } from 'react';

export interface FormContextProps {
  onChangeFormInput?: (params: FormInputParams) => void;
  initialValues?: FormValues;
  resetSignal?: number;
}

export const FormContext = createContext<FormContextProps>({});
