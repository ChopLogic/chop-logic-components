import React from 'react';
import { Button2D, PrimaryButton, ButtonIcon, ChopLogicIcon } from '@atoms';
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
        <Button2D aria-label={label} type={type} onClick={onClick} disabled={disabled} className={extendedClass} {...rest}>
          <ChopLogicIcon name={icon} />
          {text}
        </Button2D>
      );
    case ChopLogicButtonView.Icon:
      return (
        <ButtonIcon aria-label={label} type={type} onClick={onClick} disabled={disabled} {...rest} className={className}>
          <ChopLogicIcon name={icon} />
        </ButtonIcon>
      );
    default:
      return null;
  }
};

const ChopLogicButton = withTooltip(Button);

export default ChopLogicButton;
