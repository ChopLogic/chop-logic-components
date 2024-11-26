import React from 'react';
import { ThemeProvider } from 'styled-components';
import { getChopLogicTheme } from 'utils/get-chop-logic-theme.ts';

import ChopLogicButton from 'components/inputs/button/Button';
import { ChopLogicIconName } from 'components/misc/icon/Icon';

import { useChopLogicFormController } from './controller';
import { StyledForm, StyledFormButtonContainer } from './Form.styled';
import { ChopLogicFormContext } from './FormContext';
import { ChopLogicFormProps } from './types';

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({
  children,
  initialValues,
  onReset,
  onSubmit,
  onClickSubmit,
  columns = 1,
  hasReset = true,
  theme,
  ...rest
}) => {
  const { handleInputChange, handleSubmit, handleReset, resetSignal, valid } = useChopLogicFormController({
    initialValues,
    onReset,
    onSubmit,
    onClickSubmit,
  });
  const themeValues = getChopLogicTheme(theme);

  return (
    <ThemeProvider theme={themeValues}>
      <StyledForm onSubmit={handleSubmit} onReset={handleReset} $columns={columns} {...rest}>
        <ChopLogicFormContext.Provider value={{ onChangeFormInput: handleInputChange, initialValues, resetSignal }}>
          {children}
          <StyledFormButtonContainer $columns={columns}>
            {hasReset && <ChopLogicButton type='reset' text='Reset' icon={ChopLogicIconName.Clear} view='flat' />}
            <ChopLogicButton type='submit' text='Submit' icon={ChopLogicIconName.Forward} extended={!hasReset} disabled={!valid} />
          </StyledFormButtonContainer>
        </ChopLogicFormContext.Provider>
      </StyledForm>
    </ThemeProvider>
  );
};

export default ChopLogicForm;
