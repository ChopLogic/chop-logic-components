import React from 'react';

export type ChopLogicFormData = { [key: string]: unknown };

export type ChopLogicFormInput = HTMLInputElement | HTMLSelectElement;

export type ChopLogicFormInputParams = { name: string; value: unknown; valid?: boolean };

export type ChopLogicFormContextProps = {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
};

export const ChopLogicFormContext = React.createContext<ChopLogicFormContextProps>({});
