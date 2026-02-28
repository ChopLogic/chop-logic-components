import { Button } from '@components/atoms';
import { ButtonView, ElementSize, IconName } from '@enums';
import { type FC, useEffect, useRef } from 'react';

import './TabEditInput.css';

type Props = {
  tabId: string;
  isEditMode: boolean;
  editValue: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onSave: () => void;
  onCancel: () => void;
  cancelButtonId: string;
};

export const TabEditInput: FC<Props> = ({
  tabId,
  isEditMode,
  editValue,
  onInputChange,
  onInputBlur,
  onInputKeyDown,
  onSave,
  onCancel,
  cancelButtonId,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when entering edit mode
  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditMode]);

  return (
    <div className="cl-tab-edit-container">
      <input
        ref={inputRef}
        id={`${tabId}-input`}
        type="text"
        value={editValue}
        onChange={onInputChange}
        onBlur={onInputBlur}
        onKeyDown={onInputKeyDown}
        className="cl-tab-edit-container__input"
        maxLength={50}
      />
      <span className="cl-tab-edit-container__buttons">
        <Button
          view={ButtonView.Icon}
          icon={IconName.Check}
          onClick={onSave}
          label="Save tab title"
          iconSize={ElementSize.Small}
        />
        <Button
          view={ButtonView.Icon}
          icon={IconName.X}
          onClick={onCancel}
          label="Cancel tab title change"
          id={cancelButtonId}
          iconSize={ElementSize.Small}
        />
      </span>
    </div>
  );
};
