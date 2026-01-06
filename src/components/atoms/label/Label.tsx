import { Icon } from '@components/atoms';
import type { IconName } from '@enums';
import type { FC } from 'react';

import styles from './Label.module.scss';

type LabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  isTextHidden?: boolean;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
};

const Label: FC<LabelProps> = ({
  label,
  required,
  inputId,
  icon,
  iconPosition,
  isTextHidden = false,
}) => {
  const isLeftIconVisible = !!icon && iconPosition === 'left';
  const isRightIconVisible = !!icon && iconPosition === 'right';

  return (
    <label className={styles.label} htmlFor={inputId}>
      {isLeftIconVisible && <Icon name={icon} />}
      {!isTextHidden && (
        <span>
          {label}
          {required && <abbr title="required">*</abbr>}
        </span>
      )}
      {isRightIconVisible && <Icon name={icon} />}
    </label>
  );
};

export default Label;
