import { ChopLogicFormData, ChopLogicFormInputParams } from '@models';
import { createContext } from 'react';

export interface ChopLogicFormContextProps {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
}

export const ChopLogicFormContext = createContext<ChopLogicFormContextProps>({});
