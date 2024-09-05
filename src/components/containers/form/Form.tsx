import React, { FormEvent, PropsWithChildren, useState } from 'react';

import ChopLogicButton from 'components/inputs/button/Button';
import { CLIcon } from 'components/misc/icon/Icon';

import { ChopLogicFormContext, ChopLogicFormData, ChopLogicFormInputParams } from './elements/FormContext';
import { StyledForm, StyledFormButtonContainer } from './Form.styled';

export type ChopLogicFormProps = PropsWithChildren &
  React.HTMLAttributes<HTMLFormElement> & {
    columns?: number;
    initialValues?: ChopLogicFormData;
    hasReset?: boolean;
    onClickSubmit?: (data: ChopLogicFormData) => void;
  };

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({
  children,
  columns = 1,
  initialValues,
  hasReset = true,
  onReset,
  onSubmit,
  onClickSubmit,
}) => {
  const [formData, setFormData] = useState(initialValues);
  const [resetSignal, setResetSignal] = useState(0);

  const handleInputChange = (params: ChopLogicFormInputParams) => {
    setFormData({ ...formData, [params.name]: params.value });
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

  return (
    <StyledForm onSubmit={handleSubmit} onReset={handleReset} $columns={columns}>
      <ChopLogicFormContext.Provider value={{ onChangeFormInput: handleInputChange, initialValues, resetSignal }}>
        {children}
        <StyledFormButtonContainer $columns={columns}>
          {hasReset && <ChopLogicButton type='reset' text='Reset' icon={CLIcon.Clear} view='danger' />}
          <ChopLogicButton type='submit' text='Submit' icon={CLIcon.Forward} extended={!hasReset} />
        </StyledFormButtonContainer>
      </ChopLogicFormContext.Provider>
    </StyledForm>
  );
};

export default ChopLogicForm;
