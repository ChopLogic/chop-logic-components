import React, { PropsWithChildren } from 'react';
import styles from './styles.module.css';
import 'assets/common.module.css';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
};

const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>> = ({ label, required, inputId }) => {
  return (
    <label htmlFor={inputId} className={styles.label}>
      {required && (
        <abbr title='required' className={styles.required}>
          *
        </abbr>
      )}
      {label}
    </label>
  );
};

export default ChopLogicLabel;
