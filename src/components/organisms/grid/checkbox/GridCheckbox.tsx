import { Label } from '@components/atoms';
import { IconName } from '@enums';
import { useElementIds } from '@hooks';
import { getClassName } from '@utils';
import type { FC, InputHTMLAttributes } from 'react';

import './GridCheckbox.css';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const GridCheckbox: FC<Props> = ({
  name,
  label,
  disabled,
  required = false,
  onChange,
  checked = false,
  ...props
}) => {
  const { elementId } = useElementIds(props?.id);
  const checkboxClass = getClassName([
    'cl-grid-checkbox',
    {
      'cl-grid-checkbox_disabled': !!disabled,
      'cl-grid-checkbox_checked': !!checked,
    },
  ]);

  return (
    <div className={checkboxClass}>
      <input
        id={elementId}
        name={name}
        type="checkbox"
        disabled={disabled}
        required={required}
        checked={checked}
        onChange={onChange}
        className="cl-grid-checkbox__input"
      />
      <Label
        label={label}
        required={required}
        inputId={elementId}
        isTextHidden={true}
        iconPosition="left"
        icon={checked ? IconName.CheckSquare : IconName.Square}
      />
    </div>
  );
};
