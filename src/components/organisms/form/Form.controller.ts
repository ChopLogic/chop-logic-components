import type { FormInputParams, FormValues } from '@types';
import {
  type SubmitEvent,
  type SubmitEventHandler,
  useActionState,
  useCallback,
  useState,
} from 'react';

import { getInitialValidationState, isFormDataValid, updateValidationState } from './Form.helpers';

interface UseFormControllerParams<TActionState = void> {
  initialValues?: FormValues;
  resetOnSuccess?: boolean;
  onReset?: SubmitEventHandler<HTMLFormElement>;
  // Action flow
  action?: (prevState: TActionState, formData: FormData) => TActionState | Promise<TActionState>;
  actionInitialState?: TActionState;
  onActionComplete?: (state: TActionState) => void;
  // Controlled flow
  onSubmit?: (data: FormValues) => void | Promise<void>;
}

interface UseFormControllerReturn {
  handleInputChange: (params: FormInputParams) => void;
  handleReset: (event: SubmitEvent<HTMLFormElement>) => void;
  resetSignal: number;
  valid: boolean;
  isPending: boolean;
  // One of these will be defined based on the flow
  formAction?: (formData: FormData) => void;
  handleSubmit?: (event: SubmitEvent<HTMLFormElement>) => void;
}

export function useFormController<TActionState = void>({
  initialValues,
  resetOnSuccess = false,
  onReset,
  action,
  actionInitialState,
  onActionComplete,
  onSubmit,
}: UseFormControllerParams<TActionState>): UseFormControllerReturn {
  const [formData, setFormData] = useState(initialValues);
  const [validationState, setValidationState] = useState(getInitialValidationState(initialValues));
  const [resetSignal, setResetSignal] = useState(0);
  const [controlledPending, setControlledPending] = useState(false);

  const handleInputChange = (params: FormInputParams) => {
    const newData = { ...formData, [params.name]: params.value };
    setFormData(newData);
    setValidationState(updateValidationState(validationState, params));
  };

  const triggerReset = useCallback(() => {
    setFormData(initialValues);
    setResetSignal((prev) => prev + 1);
    setValidationState(getInitialValidationState(initialValues));
  }, [initialValues]);

  const handleReset = (event: SubmitEvent<HTMLFormElement>) => {
    onReset?.(event);
    triggerReset();
  };

  const valid = isFormDataValid(validationState);

  // Action flow using useActionState
  const [, dispatch, actionPending] = useActionState(
    async (prevState: Awaited<TActionState>, formData: FormData) => {
      if (!action) return prevState;
      const result = await action(prevState as TActionState, formData);
      onActionComplete?.(result);
      if (resetOnSuccess) triggerReset();
      return result as Awaited<TActionState>;
    },
    actionInitialState as Awaited<TActionState>,
  );

  // Controlled flow
  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valid || !onSubmit) return;

    const uncontrolledData = Object.fromEntries(new FormData(event.target as HTMLFormElement));
    const resultData = { ...uncontrolledData, ...formData };

    setControlledPending(true);
    try {
      await onSubmit(resultData);
      if (resetOnSuccess) triggerReset();
    } finally {
      setControlledPending(false);
    }
  };

  if (action) {
    return {
      handleInputChange,
      handleReset,
      resetSignal,
      valid,
      isPending: actionPending,
      formAction: dispatch,
    };
  }

  return {
    handleInputChange,
    handleReset,
    resetSignal,
    valid,
    isPending: controlledPending,
    handleSubmit,
  };
}
