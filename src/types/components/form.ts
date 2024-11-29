import { FormEventHandler, PropsWithChildren } from 'react';

import { CommonComponentProps } from './_common.ts';

export type ChopLogicFormData = { [key: string]: unknown };

export type ChopLogicFormValidationState = [string, boolean][];

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
    onReset?: FormEventHandler<HTMLFormElement>;
    onSubmit?: FormEventHandler<HTMLFormElement>;
  };
