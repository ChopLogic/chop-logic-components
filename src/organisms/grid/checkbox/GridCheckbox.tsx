import CheckboxCheckedIcon from '@assets/icons/svg/CheckboxCheckedIcon';
import CheckboxUncheckedIcon from '@assets/icons/svg/CheckboxUncheckedIcon';
import { Label } from '@atoms';
import { useElementIds } from '@hooks';
import { getClassName } from '@utils';
import { FC, InputHTMLAttributes } from 'react';

import styles from './GridCheckbox.module.scss';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const GridCheckbox: FC<Props> = ({ name, label, disabled, required = false, onChange, checked = false, ...props }) => {
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
