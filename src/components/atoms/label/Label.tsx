import { Icon } from '@components/atoms';
import { ElementSize, type IconName } from '@enums';
import type { FC } from 'react';
import './Label.css';
import { getClassName } from '@utils';

type LabelProps = {
  label: string;
  required: boolean;
  inputId: string;
  isTextHidden?: boolean;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  iconSize?: ElementSize;
  disabled?: boolean;
  className?: string;
  testId?: string;
};

const Label: FC<LabelProps> = ({
  label,
  required,
  inputId,
  icon,
  iconPosition,
  isTextHidden = false,
  iconSize = ElementSize.ExtraSmall,
  disabled = false,
  className,
  testId,
}) => {
  const isLeftIconVisible = !!icon && iconPosition === 'left';
  const isRightIconVisible = !!icon && iconPosition === 'right';
  const IconElement = <Icon name={icon} size={iconSize} />;
  const labelClass = getClassName(['cl-label', className, { 'cl-label_disabled': disabled }]);

  return (
    <label className={labelClass} htmlFor={inputId} data-testid={testId}>
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
