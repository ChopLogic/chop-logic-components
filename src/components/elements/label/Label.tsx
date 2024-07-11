import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';
import createClassName from 'utils/create-class-name';
import 'styles';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  className?: string;
  isTextHidden?: boolean;
};

const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>> = ({
  label,
  required,
  inputId,
  className,
  isTextHidden = false,
}) => {
  return (
    <label htmlFor={inputId} className={createClassName([styles.label, className])}>
      {!isTextHidden && <span className={styles.text}>{label}</span>}
      {required && (
        <abbr title='required' className={styles.required}>
          *
        </abbr>
      )}
    </label>
  );
};

export default ChopLogicLabel;
