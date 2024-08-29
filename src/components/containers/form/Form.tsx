import React, { FormEvent, PropsWithChildren, useState } from 'react';

import ChopLogicButton from 'components/inputs/button/Button';
import { CLIcon } from 'components/misc/icon/Icon';

import { StyledForm, StyledFormButtonContainer } from './Form.styled';
import { ChopLogicFormContext, ChopLogicFormData, ChopLogicFormInputParams } from './FormContext';

export type ChopLogicFormProps = PropsWithChildren &
  React.HTMLAttributes<HTMLFormElement> & {
    columns?: number;
    hasReset?: boolean;
    initialValues?: ChopLogicFormData;
  };

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({ children, columns = 1, hasReset = true, initialValues }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleFormInputChange = (params: ChopLogicFormInputParams) => {
    setFormData({ ...formData, [params.name]: params.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('onSubmit');
    console.log(formData);

    // const formData = new FormData(event?.target as HTMLFormElement);
    // const formObject = Object.fromEntries(formData.entries());

    // console.log(formObject);
  };

  const handleReset = () => {
    setFormData(initialValues);
  };

  return (
    <StyledForm onSubmit={handleSubmit} onReset={handleReset} $columns={columns}>
      <ChopLogicFormContext.Provider value={{ formData, onChangeFormInput: handleFormInputChange }}>
        {children}
        <StyledFormButtonContainer $columns={columns}>
          {hasReset && <ChopLogicButton type='reset' text='Reset' view='danger' icon={CLIcon.Delete} />}
          <ChopLogicButton type='submit' text='Submit' icon={CLIcon.Forward} />
        </StyledFormButtonContainer>
      </ChopLogicFormContext.Provider>
    </StyledForm>
  );
};

export default ChopLogicForm;
