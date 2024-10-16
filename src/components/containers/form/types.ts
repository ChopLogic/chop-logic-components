export type ChopLogicFormData = { [key: string]: unknown };

export type ChopLogicFormValidationState = [string, boolean][];

export type ChopLogicFormInput = HTMLInputElement | HTMLSelectElement;

export type ChopLogicFormInputParams = { name: string; value: unknown; valid?: boolean };

export type ChopLogicFormContextProps = {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
};
