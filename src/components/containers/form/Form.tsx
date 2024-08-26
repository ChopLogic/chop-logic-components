import React, { FormEvent, PropsWithChildren } from 'react';

import ChopLogicButton from 'components/inputs/button/Button';

import { StyledForm } from './Form.styled';

type ChopLogicFormProps = PropsWithChildren &
  React.HTMLAttributes<HTMLFormElement> & {
    disabled?: boolean;
  };

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({ children }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event?.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData.entries());

    console.log(formObject);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      {children}
      <ChopLogicButton type='submit' text='Submit' />
    </StyledForm>
  );
};

export default ChopLogicForm;
