import React from 'react';
import { ChopLogicFormData, ChopLogicFormInputParams } from '@models';

export interface ChopLogicFormContextProps {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
}

export const ChopLogicFormContext = React.createContext<ChopLogicFormContextProps>({});
