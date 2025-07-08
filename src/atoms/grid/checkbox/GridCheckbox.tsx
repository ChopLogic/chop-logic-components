import React from 'react';
import { useElementIds } from '@hooks';
import CheckboxCheckedIcon from '@assets/icons/svg/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '@assets/icons/svg/CheckboxUncheckedIcon.tsx';
import { getClassName } from '@utils';
import { Label } from '@atoms';
import styles from './GridCheckbox.module.scss';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const GridCheckbox: React.FC<Props> = ({ name, label, disabled, required = false, onChange, checked = false, ...props }) => {
  const { elementId } = useElementIds(props?.id);
  const checkboxClass = getClassName([
    styles.checkbox,
    {
      [styles.checkbox__disabled]: !!disabled,
      [styles.checkbox__checked]: checked,
    },
  ]);

  return (
    <div className={checkboxClass}>
      <input
        id={elementId}
        name={name}
        type='checkbox'
        disabled={disabled}
        required={required}
        checked={checked}
        onChange={onChange}
        className={styles.checkbox_input}
      />
      <Label
        label={label}
        required={required}
        inputId={elementId}
        isTextHidden={true}
        iconPosition='left'
        icon={checked ? <CheckboxCheckedIcon /> : <CheckboxUncheckedIcon />}
      />
    </div>
  );
};
