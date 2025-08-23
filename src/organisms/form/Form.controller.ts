import { FormInputParams, FormValues } from '@models';
import { FormEvent, FormEventHandler, useState } from 'react';

import { getInitialValidationState, isFormDataValid, updateValidationState } from './Form.helpers.ts';

export function useFormController({
  initialValues,
  onReset,
  onSubmit,
  onClickSubmit,
}: {
  initialValues?: FormValues;
  onReset?: FormEventHandler<HTMLFormElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onClickSubmit?: (data: FormValues) => void;
}) {
  const [formData, setFormData] = useState(initialValues);
  const [validationState, setValidationState] = useState(getInitialValidationState(initialValues));
  const [resetSignal, setResetSignal] = useState(0);

  const handleInputChange = (params: FormInputParams) => {
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
