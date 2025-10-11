import { Button } from '@atoms';
import { FormContext } from '@contexts';
import { ButtonView, IconName } from '@enums';
import { FormProps } from '@models';
import { getClassName } from '@utils';
import { FC, useMemo } from 'react';

import { useFormController } from './Form.controller';
import styles from './Form.module.scss';

const Form: FC<FormProps> = ({
  children,
  initialValues,
  onReset,
  onSubmit,
  onClickSubmit,
  columns = 1,
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
  const columnsNumber = columns <= 6 && columns >= 1 ? columns : 1;
  const baseClass = getClassName([styles.form, className]);
  const columnsClass = styles[`columns-${columnsNumber}`];
  const formClass = `${baseClass} ${columnsClass}`;
  const buttonColumnsClass = styles[`buttons-${columnsNumber}`];
  const buttonsClass = `${styles.buttons} ${buttonColumnsClass}`;
  const contextValue = useMemo(
    () => ({ onChangeFormInput: handleInputChange, initialValues, resetSignal }),
    [handleInputChange, initialValues, resetSignal],
  );

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} {...rest} className={formClass}>
      <FormContext.Provider value={contextValue}>
        {children}
        <div className={buttonsClass}>
          {hasReset && <Button type='reset' text='Reset' icon={IconName.Clear} view={ButtonView.Secondary} />}
          <Button type='submit' text='Submit' icon={IconName.Forward} extended={!hasReset} disabled={!valid} />
        </div>
      </FormContext.Provider>
    </form>
  );
};

export default Form;
