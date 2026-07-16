import { Button } from '@components/atoms';
import { ButtonView, IconName } from '@enums';
import type { FormProps } from '@types';
import { getClassName } from '@utils';
import { type FC, useMemo } from 'react';
import { FormContext } from '../../contexts';

import { useFormController } from './Form.controller';
import './Form.css';

const Form: FC<FormProps> = ({
  children,
  initialValues,
  onReset,
  onSubmit,
  action,
  actionInitialState,
  onActionComplete,
  resetOnSuccess = false,
  hasReset = true,
  className,
}) => {
  const {
    handleInputChange,
    handleSubmit,
    handleReset,
    formAction,
    resetSignal,
    valid,
    isPending,
  } = useFormController({
    initialValues,
    resetOnSuccess,
    onReset,
    onSubmit,
    action,
    actionInitialState,
    onActionComplete,
  });

  const formClass = getClassName(['cl-form', className, { 'cl-form_pending': isPending }]);

  const contextValue = useMemo(
    () => ({ onChangeFormInput: handleInputChange, initialValues, resetSignal, isPending }),
    [handleInputChange, initialValues, resetSignal, isPending],
  );

  const formProps = action ? { action: formAction } : { onSubmit: handleSubmit };

  return (
    <form {...formProps} onReset={handleReset} className={formClass}>
      <FormContext.Provider value={contextValue}>
        {children}
        <div className="cl-form__buttons">
          {hasReset && (
            <Button
              type="reset"
              text="Clear"
              icon={IconName.Trash}
              view={ButtonView.Secondary}
              disabled={isPending}
            />
          )}
          <Button
            type="submit"
            text="Submit"
            icon={IconName.ArrowRight}
            extended={!hasReset}
            disabled={!valid || isPending}
          />
        </div>
      </FormContext.Provider>
    </form>
  );
};

export default Form;
