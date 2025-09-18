import { Button } from '@atoms';
import { ButtonView, IconName } from '@enums';
import { FC, useEffect, useRef } from 'react';

import styles from './TabEditInput.module.scss';

type Props = {
  tabId: string;
  isEditMode: boolean;
  editValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
};

export const TabEditInput: FC<Props> = ({ tabId, isEditMode, editValue, onInputChange, onInputBlur, onInputKeyDown, onSave, onCancel }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when entering edit mode
  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditMode]);

  return (
    <div className={styles.editContainer}>
      <input
        ref={inputRef}
        id={tabId + '-input'}
        type='text'
        value={editValue}
        onChange={onInputChange}
        onBlur={onInputBlur}
        onKeyDown={onInputKeyDown}
        className={styles.editContainer_input}
        maxLength={50}
      />
      <span className={styles.editContainer_buttons}>
        <Button view={ButtonView.Icon} icon={IconName.CheckMark} onClick={onSave} label='Save tab title' />
        <Button view={ButtonView.Icon} icon={IconName.Cancel} onClick={onCancel} label='Cancel tab title change' />
      </span>
    </div>
  );
};
