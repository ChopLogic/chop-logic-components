import React, { PropsWithChildren } from 'react';
import styles from './Label.module.scss';

type ChopLogicLabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  isTextHidden?: boolean;
  icon?: React.ReactElement;
  iconPosition?: 'left' | 'right';
  style?: React.CSSProperties;
};

const ChopLogicLabel: React.FC<PropsWithChildren<ChopLogicLabelProps>> = ({
  label,
  required,
  inputId,
  icon,
  iconPosition,
  isTextHidden = false,
  style,
}) => {
  const isLeftIconVisible = !!icon && iconPosition === 'left';
  const isRightIconVisible = !!icon && iconPosition === 'right';

  return (
    <label className={styles.label} htmlFor={inputId} style={style}>
      {isLeftIconVisible && icon}
      {!isTextHidden && (
        <span>
          {label}
          {required && <abbr title='required'>*</abbr>}
        </span>
      )}
      {isRightIconVisible && icon}
    </label>
  );
};

export default ChopLogicLabel;
