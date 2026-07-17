import type { FormEventHandler, PropsWithChildren } from 'react';

import type { ChopLogicComponentProps } from './_common';

export type FormValues = { [key: string]: unknown };

export type FormValidationState = [string, boolean][];

export interface FormInputParams {
  name: string;
  value: unknown;
  valid?: boolean;
}

export interface FormProps<TActionState = void> extends PropsWithChildren, ChopLogicComponentProps {
  // Shared
  initialValues?: FormValues;
  hasReset?: boolean;
  resetOnSuccess?: boolean;

  // Action flow (React 19 native <form action>)
  action?: (prevState: TActionState, formData: FormData) => TActionState | Promise<TActionState>;
  actionInitialState?: TActionState;
  onActionComplete?: (state: TActionState) => void;

  // Controlled flow
  onSubmit?: (data: FormValues) => void | Promise<void>;
  onReset?: FormEventHandler<HTMLFormElement>;
}
