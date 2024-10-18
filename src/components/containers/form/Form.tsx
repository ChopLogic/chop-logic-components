import React, { PropsWithChildren } from 'react';

import ChopLogicButton from 'components/inputs/button/Button';
import { ChopLogicIconName } from 'components/misc/icon/Icon';

import { useChopLogicFormController } from './controller';
import { StyledForm, StyledFormButtonContainer } from './Form.styled';
import { ChopLogicFormContext } from './FormContext';
import { ChopLogicFormData } from './types';

export type ChopLogicFormProps = PropsWithChildren &
  React.HTMLAttributes<HTMLFormElement> & {
    columns?: number;
    initialValues?: ChopLogicFormData;
    hasReset?: boolean;
    onClickSubmit?: (data: ChopLogicFormData) => void;
  };

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({
  children,
  initialValues,
  onReset,
  onSubmit,
  onClickSubmit,
  columns = 1,
  hasReset = true,
  ...rest
}) => {
  const { handleInputChange, handleSubmit, handleReset, resetSignal, valid } = useChopLogicFormController({
    initialValues,
    onReset,
    onSubmit,
    onClickSubmit,
  });

  return (
    <StyledForm
      onSubmit={handleSubmit}
      onReset={handleReset}
      $columns={columns}
      style={rest.style}
      className={rest.className}
      id={rest.id}
      tabIndex={rest.tabIndex}
    >
      <ChopLogicFormContext.Provider value={{ onChangeFormInput: handleInputChange, initialValues, resetSignal }}>
        {children}
        <StyledFormButtonContainer $columns={columns}>
          {hasReset && <ChopLogicButton type='reset' text='Reset' icon={ChopLogicIconName.Clear} view='danger' />}
          <ChopLogicButton type='submit' text='Submit' icon={ChopLogicIconName.Forward} extended={!hasReset} disabled={!valid} />
        </StyledFormButtonContainer>
      </ChopLogicFormContext.Provider>
    </StyledForm>
  );
};

export default ChopLogicForm;
