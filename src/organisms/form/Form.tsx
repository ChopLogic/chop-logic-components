import { Button } from '@atoms';
import { ChopLogicFormContext } from '@contexts';
import { ButtonView, IconName } from '@enums';
import { ChopLogicFormProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import { useChopLogicFormController } from './Form.controller.ts';
import styles from './Form.module.scss';

const ChopLogicForm: FC<ChopLogicFormProps> = ({
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
  const { handleInputChange, handleSubmit, handleReset, resetSignal, valid } = useChopLogicFormController({
    initialValues,
    onReset,
    onSubmit,
    onClickSubmit,
  });
  const columnsNumber = columns <= 6 && columns >= 1 ? columns : 1;
  const formClass = getClassName([styles.form, className]);

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} {...rest} className={`${formClass} ${styles[`columns-${columnsNumber}`]}`}>
      <ChopLogicFormContext.Provider value={{ onChangeFormInput: handleInputChange, initialValues, resetSignal }}>
        {children}
        <div className={`${styles.buttons} ${styles[`buttons-${columnsNumber}`]}`}>
          {hasReset && <Button type='reset' text='Reset' icon={IconName.Clear} view={ButtonView.Secondary} />}
          <Button type='submit' text='Submit' icon={IconName.Forward} extended={!hasReset} disabled={!valid} />
        </div>
      </ChopLogicFormContext.Provider>
    </form>
  );
};

export default ChopLogicForm;
