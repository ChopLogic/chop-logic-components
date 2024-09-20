import { FormEvent, useState } from 'react';

import { ChopLogicFormData, ChopLogicFormInputParams, ChopLogicFormValidationState } from './FormContext';

export function getInitialValidationState(data?: ChopLogicFormData): ChopLogicFormValidationState {
  if (!data) return [];

  return Object.keys(data).map((key) => [key, true]);
}

export function updateValidationState(state: ChopLogicFormValidationState, params: ChopLogicFormInputParams): ChopLogicFormValidationState {
  if (params?.valid === undefined) return state;

  return state.map((item) => {
    if (item[0] !== params.name) return item;
    return [item[0], !!params?.valid];
  });
}

export function isFormDataValid(state: ChopLogicFormValidationState): boolean {
  return state.every((item) => item[1] === true);
}

export function useChopLogicFormController({
  initialValues,
  onReset,
  onSubmit,
  onClickSubmit,
}: {
  initialValues?: ChopLogicFormData;
  onReset?: React.FormEventHandler<HTMLFormElement>;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  onClickSubmit?: (data: ChopLogicFormData) => void;
}) {
  const [formData, setFormData] = useState(initialValues);
  const [validationState, setValidationState] = useState(getInitialValidationState(initialValues));
  const [resetSignal, setResetSignal] = useState(0);

  const handleInputChange = (params: ChopLogicFormInputParams) => {
    const newData = { ...formData, [params.name]: params.value };
    setFormData(newData);
    setValidationState(updateValidationState(validationState, params));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const uncontrolledData = Object.fromEntries(new FormData(event.target as HTMLFormElement));
    const resultData = { ...uncontrolledData, ...formData };

    onSubmit?.(event);
    onClickSubmit?.(resultData);
  };

  const handleReset = (event: FormEvent<HTMLFormElement>) => {
    onReset?.(event);
    setFormData(initialValues);
    setResetSignal(resetSignal + 1);
  };

  return {
    handleInputChange,
    handleSubmit,
    handleReset,
    resetSignal,
    valid: isFormDataValid(validationState),
  };
}
