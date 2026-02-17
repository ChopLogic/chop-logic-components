import type { SwitchProps } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import { useSwitchController } from './Switch.controller';
import './Switch.css';

const Switch: FC<SwitchProps> = ({
  checked,
  onChange,
  label,
  disabled = false,
  className,
  id,
  name,
  value = 'on',
  hasIndicator,
}) => {
  const {
    checked: controlledChecked,
    handleChange,
    handleKeyDown,
  } = useSwitchController({
    name,
    defaultChecked: checked,
    onChange,
  });

  const switchClass = getClassName([
    'cl-switch',
    className,
    {
      'cl-switch__checked': controlledChecked,
      'cl-switch_disabled': disabled,
    },
  ]);

  const handleClick = () => {
    if (!disabled) {
      handleChange(!controlledChecked);
    }
  };

  return (
    <div
      role="switch"
      aria-checked={controlledChecked}
      aria-label={label}
      tabIndex={disabled ? -1 : 0}
      className={switchClass}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      id={id}
    >
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={controlledChecked}
        disabled={disabled}
        className="cl-switch__input"
        readOnly
        data-testid="switch-input"
      />
      <span className="cl-switch__label">{label}</span>
      {hasIndicator && (
        <span className="cl-switch__indicator" aria-hidden="true">
          {controlledChecked ? 'On' : 'Off'}
        </span>
      )}
      <span className="cl-switch__track">
        <span className="cl-switch__thumb" />
      </span>
    </div>
  );
};

export default Switch;
