import { getClassName } from '@utils';
import type { FC } from 'react';
import { withTooltip } from '../../hocs';
import './Button.css';

import { ButtonView } from '@enums';
import type { ButtonProps } from '@types';
import { IconButton } from './icon-button/IconButton';
import { InnerButton } from './inner-button/InnerButton';
import { PrimaryButton } from './primary-button/PrimaryButton';
import { SecondaryButton } from './secondary-button/SecondaryButton';

const ButtonSelector: FC<ButtonProps> = ({
  text,
  icon,
  tooltip,
  extended = false,
  view = ButtonView.Primary,
  label,
  className,
  ...rest
}) => {
  const extendedClass = getClassName([className, 'cl-button', { 'cl-button_extended': extended }]);

  switch (view) {
    case ButtonView.Primary:
      return (
        <PrimaryButton
          className={extendedClass}
          icon={icon}
          text={text}
          aria-label={label}
          {...rest}
        />
      );
    case ButtonView.Secondary:
      return (
        <SecondaryButton
          className={extendedClass}
          icon={icon}
          text={text}
          aria-label={label}
          {...rest}
        />
      );
    case ButtonView.Icon:
      return <IconButton label={label} icon={icon} {...rest} className={className} />;
    case ButtonView.Inner:
      return <InnerButton label={label} icon={icon} {...rest} className={className}></InnerButton>;
    default:
      return null;
  }
};

const Button = withTooltip(ButtonSelector);

export default Button;
