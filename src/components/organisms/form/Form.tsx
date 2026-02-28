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
  onClickSubmit,
  hasReset = true,
  className,
  ...rest
}) => {
  const { handleInputChange, handleSubmit, handleReset, resetSignal, valid } = useFormController({
    initialValues,
    onReset,
    onSubmit,
    onClickSubmit,
  });
  const formClass = getClassName(['cl-form', className]);
  const contextValue = useMemo(
    () => ({ onChangeFormInput: handleInputChange, initialValues, resetSignal }),
    [handleInputChange, initialValues, resetSignal],
  );

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} {...rest} className={formClass}>
      <FormContext.Provider value={contextValue}>
        {children}
        <div className="cl-form__buttons">
          {hasReset && (
            <Button type="reset" text="Reset" icon={IconName.Delete} view={ButtonView.Secondary} />
          )}
          <Button
            type="submit"
            text="Submit"
            icon={IconName.ArrowRight}
            extended={!hasReset}
            disabled={!valid}
          />
        </div>
      </FormContext.Provider>
    </form>
  );
};

export default Form;
