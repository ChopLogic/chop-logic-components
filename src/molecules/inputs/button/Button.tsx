import React from 'react';
import { ChopLogicIcon } from '@atoms';
import { ChopLogicButtonView } from '@enums';
import { withTooltip } from '@hocs';
import { ChopLogicButtonProps } from '@models';
import styles from './Button.module.scss';
import { getClassName } from '@utils';
import Button3D from '@atoms/button-3D/Button3D.tsx';
import Button2D from '@atoms/button-2D/Button2D.tsx';
import ButtonIcon from '@atoms/button-icon/ButtonIcon.tsx';

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
        <Button3D aria-label={label} type={type} onClick={onClick} disabled={disabled} className={extendedClass} {...rest}>
          <ChopLogicIcon name={icon} />
          {text}
        </Button3D>
      );
    case ChopLogicButtonView.Flat:
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
