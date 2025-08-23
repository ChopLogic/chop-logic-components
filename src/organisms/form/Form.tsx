import { Button } from '@atoms';
import { FormContext } from '@contexts';
import { ButtonView, IconName } from '@enums';
import { FormProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import { useFormController } from './Form.controller.ts';
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
  const formClass = getClassName([styles.form, className]);

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} {...rest} className={`${formClass} ${styles[`columns-${columnsNumber}`]}`}>
      <FormContext.Provider value={{ onChangeFormInput: handleInputChange, initialValues, resetSignal }}>
        {children}
        <div className={`${styles.buttons} ${styles[`buttons-${columnsNumber}`]}`}>
          {hasReset && <Button type='reset' text='Reset' icon={IconName.Clear} view={ButtonView.Secondary} />}
          <Button type='submit' text='Submit' icon={IconName.Forward} extended={!hasReset} disabled={!valid} />
        </div>
      </FormContext.Provider>
    </form>
  );
};

export default Form;
