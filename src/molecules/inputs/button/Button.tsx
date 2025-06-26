import React from 'react';
import { ChopLogicIcon, IconButton, InnerButton, PrimaryButton, SecondaryButton } from '@atoms';
import { ChopLogicButtonView } from '@enums';
import { withTooltip } from '@hocs';
import { ChopLogicButtonProps } from '@models';
import styles from './Button.module.scss';
import { getClassName } from '@utils';

const Button: React.FC<ChopLogicButtonProps> = ({
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
  const extendedClass = getClassName([className, { [styles.extended]: extended }]);

  switch (view) {
    case ChopLogicButtonView.Primary:
      return (
        <PrimaryButton aria-label={label} type={type} onClick={onClick} disabled={disabled} className={extendedClass} {...rest}>
          <ChopLogicIcon name={icon} />
          {text}
        </PrimaryButton>
      );
    case ChopLogicButtonView.Secondary:
      return (
        <SecondaryButton aria-label={label} type={type} onClick={onClick} disabled={disabled} className={extendedClass} {...rest}>
          <ChopLogicIcon name={icon} />
          {text}
        </SecondaryButton>
      );
    case ChopLogicButtonView.Icon:
      return (
        <IconButton aria-label={label} type={type} onClick={onClick} disabled={disabled} {...rest} className={className}>
          <ChopLogicIcon name={icon} />
        </IconButton>
      );
    case ChopLogicButtonView.Inner:
      return <InnerButton label={label} icon={icon} onClick={onClick} disabled={disabled} {...rest} className={className}></InnerButton>;
    default:
      return null;
  }
};

const ChopLogicButton = withTooltip(Button);

export default ChopLogicButton;
