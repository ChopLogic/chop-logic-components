import { FC, ReactElement } from 'react';
import styles from './Label.module.scss';

type LabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  isTextHidden?: boolean;
  icon?: ReactElement;
  iconPosition?: 'left' | 'right';
};

const Label: FC<LabelProps> = ({ label, required, inputId, icon, iconPosition, isTextHidden = false }) => {
  const isLeftIconVisible = !!icon && iconPosition === 'left';
  const isRightIconVisible = !!icon && iconPosition === 'right';

  return (
    <label className={styles.label} htmlFor={inputId}>
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

export default Label;
