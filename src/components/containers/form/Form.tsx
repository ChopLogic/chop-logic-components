import React, { FormEvent, PropsWithChildren, useRef } from 'react';

import ChopLogicButton from 'components/inputs/button/Button';
import { CLIcon } from 'components/misc/icon/Icon';

import { StyledForm, StyledFormButtonContainer } from './Form.styled';

export type ChopLogicFormProps = PropsWithChildren &
  React.HTMLAttributes<HTMLFormElement> & {
    columns?: number;
    hasReset?: boolean;
  };

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({ children, columns = 1, hasReset = true, onReset }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event?.target as HTMLFormElement);
    const formObject = Object.fromEntries(formData.entries());

    console.log(formObject);
  };

  const handleReset = (event: FormEvent<HTMLFormElement>) => {
    formRef?.current?.reset();
    onReset?.(event);
  };

  return (
    <StyledForm ref={formRef} onSubmit={handleSubmit} onReset={handleReset} $columns={columns}>
      {children}
      <StyledFormButtonContainer $columns={columns}>
        {hasReset && <ChopLogicButton type='reset' text='Reset' view='danger' icon={CLIcon.Delete} />}
        <ChopLogicButton type='submit' text='Submit' icon={CLIcon.Forward} />
      </StyledFormButtonContainer>
    </StyledForm>
  );
};

export default ChopLogicForm;
