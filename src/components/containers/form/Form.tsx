import React, { PropsWithChildren } from 'react';

import { StyledForm } from './Form.styled';

type ChopLogicFormProps = PropsWithChildren &
  React.HTMLAttributes<HTMLFormElement> & {
    disabled?: boolean;
  };

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({ children }) => {
  return <StyledForm>{children}</StyledForm>;
};

export default ChopLogicForm;
