import { SwitchProps } from '@models';
import { getClassName } from '@utils';
import { FC, KeyboardEvent, useCallback } from 'react';

import styles from './Switch.module.scss';

const Switch: FC<SwitchProps> = ({ checked, onChange, label, disabled = false, className, id, name, value = 'on' }) => {
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
      if (disabled) return;

      // Space bar or Enter key toggles the switch
      if (event.key === ' ' || event.key === 'Enter') {
        event.preventDefault();
        onChange(!checked);
      }
    },
    [checked, disabled, onChange],
  );

  return (
    <div
      role='switch'
      aria-checked={checked}
      aria-label={label}
      tabIndex={disabled ? -1 : 0}
      className={switchClass}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      id={id}
    >
      {/* Hidden input for form submission */}
      <input
        type='checkbox'
        name={name}
        value={value}
        checked={checked}
        onChange={() => {}} // Handled by the div
        disabled={disabled}
        className={styles.switchInput}
        aria-hidden='true'
      />

      {/* Visual label */}
      <span className={styles.switchLabel}>{label}</span>

      {/* Switch track and thumb */}
      <span className={styles.switchTrack}>
        <span className={styles.switchThumb} />
      </span>

      {/* Visual state indicators (hidden from screen readers) */}
      <span className={styles.switchOn} aria-hidden='true'>
        On
      </span>
      <span className={styles.switchOff} aria-hidden='true'>
        Off
      </span>
    </div>
  );
};

export default Switch;
