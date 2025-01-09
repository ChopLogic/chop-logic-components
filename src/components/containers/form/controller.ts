import React, { FormEvent, useState } from 'react';
import { ChopLogicFormData, ChopLogicFormInputParams } from '@models';

import { getInitialValidationState, isFormDataValid, updateValidationState } from './helpers';

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
