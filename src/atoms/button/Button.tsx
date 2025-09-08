import { ChopLogicIcon } from '@atoms';
import { ButtonView } from '@enums';
import { withTooltip } from '@hocs';
import { ButtonProps } from '@models';
import { getClassName } from '@utils';
import { FC } from 'react';

import styles from './Button.module.scss';
import { IconButton } from './icon-button/IconButton';
import { InnerButton } from './inner-button/InnerButton';
import { PrimaryButton } from './primary-button/PrimaryButton';
import { SecondaryButton } from './secondary-button/SecondaryButton';

const ButtonSelector: FC<ButtonProps> = ({
  onClick,
  text,
  icon,
  label,
  disabled = false,
  extended = false,
  type = 'button',
  view = ButtonView.Primary,
  className,
  ...rest
}) => {
  const extendedClass = getClassName([className, { [styles.extended]: extended }]);

  switch (view) {
    case ButtonView.Primary:
      return (
        <PrimaryButton aria-label={label} type={type} onClick={onClick} disabled={disabled} className={extendedClass} {...rest}>
          <ChopLogicIcon name={icon} />
          {text}
        </PrimaryButton>
      );
    case ButtonView.Secondary:
      return (
        <SecondaryButton aria-label={label} type={type} onClick={onClick} disabled={disabled} className={extendedClass} {...rest}>
          <ChopLogicIcon name={icon} />
          {text}
        </SecondaryButton>
      );
    case ButtonView.Icon:
      return (
        <IconButton aria-label={label} type={type} onClick={onClick} disabled={disabled} {...rest} className={className}>
          <ChopLogicIcon name={icon} />
        </IconButton>
      );
    case ButtonView.Inner:
      return <InnerButton label={label} icon={icon} onClick={onClick} disabled={disabled} {...rest} className={className}></InnerButton>;
    default:
      return null;
  }
};

const Button = withTooltip(ButtonSelector);

export default Button;
