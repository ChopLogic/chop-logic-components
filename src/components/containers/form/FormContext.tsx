import React from 'react';

export type ChopLogicFormData = { [key: string]: unknown };

export type ChopLogicFormInput = HTMLInputElement | HTMLSelectElement;

export type ChopLogicFormInputParams = { name: string; value: unknown };

export type ChopLogicFormContextProps = {
  formData?: ChopLogicFormData;
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
};

export const ChopLogicFormContext = React.createContext<ChopLogicFormContextProps>({});
