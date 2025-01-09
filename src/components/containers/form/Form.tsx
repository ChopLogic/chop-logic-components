import React from 'react';
import { ChopLogicButton } from '@components';
import { ChopLogicFormContext } from '@contexts';
import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import { useChopLogicTheme } from '@hooks';
import { ChopLogicFormProps } from '@models';

import { useChopLogicFormController } from './controller';
import { StyledForm, StyledFormButtonsContainer } from './Form.styled';

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
        <StyledFormButtonsContainer $columns={columns}>
          {hasReset && <ChopLogicButton type='reset' text='Reset' icon={ChopLogicIconName.Clear} view={ChopLogicButtonView.Flat} />}
          <ChopLogicButton type='submit' text='Submit' icon={ChopLogicIconName.Forward} extended={!hasReset} disabled={!valid} />
        </StyledFormButtonsContainer>
      </ChopLogicFormContext.Provider>
    </StyledForm>
  );
};

export default ChopLogicForm;
