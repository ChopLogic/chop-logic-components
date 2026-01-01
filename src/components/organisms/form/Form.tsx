import { Button } from '@components/atoms';
import { FormContext } from '@contexts';
import { ButtonView, IconName } from '@enums';
import type { FormProps } from '@models';
import { getClassName } from '@utils';
import { type FC, useMemo } from 'react';

import { useFormController } from './Form.controller';
import styles from './Form.module.scss';

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
  const formClass = getClassName([styles.form, className]);
  const contextValue = useMemo(
    () => ({ onChangeFormInput: handleInputChange, initialValues, resetSignal }),
    [handleInputChange, initialValues, resetSignal],
  );

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} {...rest} className={formClass}>
      <FormContext.Provider value={contextValue}>
        {children}
        <div className={styles.form_buttons}>
          {hasReset && (
            <Button type="reset" text="Reset" icon={IconName.Clear} view={ButtonView.Secondary} />
          )}
          <Button
            type="submit"
            text="Submit"
            icon={IconName.Forward}
            extended={!hasReset}
            disabled={!valid}
          />
        </div>
      </FormContext.Provider>
    </form>
  );
};

export default Form;
