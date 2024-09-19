import { FormEvent, useState } from 'react';

import { ChopLogicFormData, ChopLogicFormInputParams } from './FormContext';

export function validateChopLogicFormData(data?: ChopLogicFormData): boolean {
  if (!data) return true;

  const valid = true;

  for (const key in data) {
    console.log('key', key, 'value', data[key]);
  }

  return valid;
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
  const [resetSignal, setResetSignal] = useState(0);
  const [valid, setValid] = useState(true);

  const handleInputChange = (params: ChopLogicFormInputParams) => {
    const newData = { ...formData, [params.name]: params.value };
    setValid(validateChopLogicFormData(newData));
    setFormData(newData);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const uncontrolledData = Object.fromEntries(new FormData(event.target as HTMLFormElement));
    const resultData = { ...uncontrolledData, ...formData };
    console.log(resultData);

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
    valid,
  };
}
