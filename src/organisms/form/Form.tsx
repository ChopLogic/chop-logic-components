import React from 'react';
import { ChopLogicButton } from '@atoms';
import { ChopLogicFormContext } from '@contexts';
import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import { ChopLogicFormProps } from '@models';
import styles from './Form.module.scss';
import { useChopLogicFormController } from './Form.controller.ts';
import { getClassName } from '@utils';

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({
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
          {hasReset && <ChopLogicButton type='reset' text='Reset' icon={ChopLogicIconName.Clear} view={ChopLogicButtonView.Flat} />}
          <ChopLogicButton type='submit' text='Submit' icon={ChopLogicIconName.Forward} extended={!hasReset} disabled={!valid} />
        </div>
      </ChopLogicFormContext.Provider>
    </form>
  );
};

export default ChopLogicForm;
