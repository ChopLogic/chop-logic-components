import type { SwitchProps } from '@models';
import { getClassName } from '@utils';
import { type FC, type KeyboardEvent, useCallback } from 'react';

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
  const switchClass = getClassName([
    styles.switch,
    className,
    {
      [styles.switch__checked]: checked,
      [styles.switch__disabled]: disabled,
    },
  ]);

  const handleClick = useCallback(() => {
    if (!disabled) {
      onChange(!checked);
    }
  }, [checked, disabled, onChange]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        onChange(!checked);
      }
    },
    [checked, onChange],
  );

  return (
    <div
      role="switch"
      aria-checked={checked}
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
        checked={checked}
        disabled={disabled}
        className={styles.switch_input}
        readOnly
        data-testid="switch-input"
      />
      <span className={styles.switch_label}>{label}</span>
      {hasIndicator && (
        <span className={styles.switch_indicator} aria-hidden="true">
          {checked ? 'On' : 'Off'}
        </span>
      )}
      <span className={styles.switch_track}>
        <span className={styles.switch_thumb} />
      </span>
    </div>
  );
};

export default Switch;
