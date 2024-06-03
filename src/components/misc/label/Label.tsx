import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';
import 'assets/common.module.css';
import createClassName from 'utils/create-class-name';

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
      {!isTextHidden && <span>{label}</span>}
      {required && (
        <abbr title='required' className={styles.required}>
          *
        </abbr>
      )}
    </label>
  );
};

export default ChopLogicLabel;
