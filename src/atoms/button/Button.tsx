import React from 'react';
import { ChopLogicIcon } from '@atoms';
import { ChopLogicButtonView } from '@enums';
import { withTooltip } from '@hocs';
import { ChopLogicButtonProps } from '@models';
import styles from './Button.module.scss';
import { getClassName } from '@utils';

const ChopLogicButton: React.FC<ChopLogicButtonProps> = ({
  onClick,
  text,
  icon,
  label,
  disabled = false,
  extended = false,
  type = 'button',
  view = ChopLogicButtonView.Primary,
  className,
  ...rest
}) => {
  const primaryClassName = getClassName([styles.primary, className, { [styles.primary__extended]: extended }]);
  const flatClassName = getClassName([styles.flat, className]);
  const iconClassName = getClassName([styles.icon, icon]);

  switch (view) {
    case ChopLogicButtonView.Primary:
      return (
        <button aria-label={label} type={type} onClick={onClick} disabled={disabled} {...rest} className={primaryClassName}>
          <span className={styles.primary_shadow}></span>
          <span className={styles.primary_edge}></span>
          <span className={styles.primary_front}>
            <ChopLogicIcon name={icon} />
            {text}
          </span>
        </button>
      );
    case ChopLogicButtonView.Flat:
      return (
        <button aria-label={label} type={type} onClick={onClick} disabled={disabled} {...rest} className={flatClassName}>
          <ChopLogicIcon name={icon} />
          {text}
        </button>
      );
    case ChopLogicButtonView.Icon:
      return (
        <button aria-label={label} type={type} onClick={onClick} disabled={disabled} {...rest} className={iconClassName}>
          <ChopLogicIcon name={icon} />
        </button>
      );
    default:
      return null;
  }
};

export default withTooltip(ChopLogicButton);
