import React from 'react';

import { ChopLogicButton } from '@/components';
import { ChopLogicFormContext } from '@/contexts';
import { ChopLogicIconName } from '@/enums';
import { useChopLogicTheme } from '@/hooks';
import { ChopLogicFormProps } from '@/types';

import { useChopLogicFormController } from './controller';
import { StyledForm, StyledFormButtonContainer } from './Form.styled';

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
  const theme = useChopLogicTheme();

  return (
    <StyledForm onSubmit={handleSubmit} onReset={handleReset} $columns={columns} $theme={theme} {...rest}>
      <ChopLogicFormContext.Provider value={{ onChangeFormInput: handleInputChange, initialValues, resetSignal }}>
        {children}
        <StyledFormButtonContainer $columns={columns} $theme={theme}>
          {hasReset && <ChopLogicButton type='reset' text='Reset' icon={ChopLogicIconName.Clear} view='flat' />}
          <ChopLogicButton type='submit' text='Submit' icon={ChopLogicIconName.Forward} extended={!hasReset} disabled={!valid} />
        </StyledFormButtonContainer>
      </ChopLogicFormContext.Provider>
    </StyledForm>
  );
};

export default ChopLogicForm;
