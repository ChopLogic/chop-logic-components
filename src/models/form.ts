import type { FormEventHandler, PropsWithChildren } from 'react';

import type { ChopLogicComponentProps } from './_common';

export type FormValues = { [key: string]: unknown };

export type FormValidationState = [string, boolean][];

export interface FormInputParams {
  name: string;
  value: unknown;
  valid?: boolean;
}

export interface FormProps extends PropsWithChildren, ChopLogicComponentProps {
  columns?: number;
  initialValues?: FormValues;
  hasReset?: boolean;
  onClickSubmit?: (data: FormValues) => void;
  onReset?: FormEventHandler<HTMLFormElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
