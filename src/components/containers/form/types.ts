import { PropsWithChildren } from 'react';
import { CommonComponentProps } from 'utils/types';

export type ChopLogicFormData = { [key: string]: unknown };

export type ChopLogicFormValidationState = [string, boolean][];

export type ChopLogicFormInput = HTMLInputElement | HTMLSelectElement;

export type ChopLogicFormInputParams = { name: string; value: unknown; valid?: boolean };

export type ChopLogicFormContextProps = {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
};

export type ChopLogicFormProps = PropsWithChildren &
  CommonComponentProps & {
    columns?: number;
    initialValues?: ChopLogicFormData;
    hasReset?: boolean;
    onClickSubmit?: (data: ChopLogicFormData) => void;
    onReset?: React.FormEventHandler<HTMLFormElement>;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
  };
