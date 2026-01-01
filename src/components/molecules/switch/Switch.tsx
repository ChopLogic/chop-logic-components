import type { SwitchProps } from '@models';
import { getClassName } from '@utils';
import type { FC } from 'react';

import { useSwitchController } from './Switch.controller';
import styles from './Switch.module.scss';

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
    styles.switch,
    className,
    {
      [styles.switch__checked]: controlledChecked,
      [styles.switch__disabled]: disabled,
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
        className={styles.switch_input}
        readOnly
        data-testid="switch-input"
      />
      <span className={styles.switch_label}>{label}</span>
      {hasIndicator && (
        <span className={styles.switch_indicator} aria-hidden="true">
          {controlledChecked ? 'On' : 'Off'}
        </span>
      )}
      <span className={styles.switch_track}>
        <span className={styles.switch_thumb} />
      </span>
    </div>
  );
};

export default Switch;
