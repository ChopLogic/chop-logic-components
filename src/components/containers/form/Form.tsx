import React, { FormEvent, PropsWithChildren, useState } from 'react';

import ChopLogicButton from 'components/inputs/button/Button';
import { CLIcon } from 'components/misc/icon/Icon';

import { StyledForm, StyledFormButtonContainer } from './Form.styled';
import { ChopLogicFormContext, ChopLogicFormData, ChopLogicFormInputParams } from './FormContext';

export type ChopLogicFormProps = PropsWithChildren &
  React.HTMLAttributes<HTMLFormElement> & {
    columns?: number;
    initialValues?: ChopLogicFormData;
  };

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({ children, columns = 1, initialValues }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleFormInputChange = (params: ChopLogicFormInputParams) => {
    setFormData({ ...formData, [params.name]: params.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('onSubmit');
    console.log(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit} $columns={columns}>
      <ChopLogicFormContext.Provider value={{ formData, onChangeFormInput: handleFormInputChange, initialValues }}>
        {children}
        <StyledFormButtonContainer $columns={columns}>
          <ChopLogicButton type='submit' text='Submit' icon={CLIcon.Forward} extended />
        </StyledFormButtonContainer>
      </ChopLogicFormContext.Provider>
    </StyledForm>
  );
};

export default ChopLogicForm;
