import { Icon } from '@components/atoms';
import type { IconName } from '@enums';
import type { FC } from 'react';
import './Label.css';

type LabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  isTextHidden?: boolean;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconSize?: 's' | 'm' | 'l' | 'xl';
};

const Label: FC<LabelProps> = ({
  label,
  required,
  inputId,
  icon,
  iconPosition,
  isTextHidden = false,
  iconSize = 'm',
}) => {
  const isLeftIconVisible = !!icon && iconPosition === 'left';
  const isRightIconVisible = !!icon && iconPosition === 'right';
  const IconElement = <Icon name={icon} size={iconSize} />;

  return (
    <label className="cl-label" htmlFor={inputId}>
      {isLeftIconVisible && IconElement}
      {!isTextHidden && (
        <span className="cl-label__text">
          {label}
          {required && (
            <abbr className="cl-label__required" title="required">
              *
            </abbr>
          )}
        </span>
      )}
      {isRightIconVisible && IconElement}
    </label>
  );
};

export default Label;
