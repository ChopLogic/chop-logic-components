import { ChopLogicFormData, ChopLogicFormInputParams } from '@models';
import React from 'react';

export interface ChopLogicFormContextProps {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
}

export const ChopLogicFormContext = React.createContext<ChopLogicFormContextProps>({});
