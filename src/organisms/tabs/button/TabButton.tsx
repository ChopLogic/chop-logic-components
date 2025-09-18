import { Button } from '@atoms';
import { ButtonView, IconName, OrientationMode } from '@enums';
import { getClassName } from '@utils';
import { FC, useEffect, useRef, useState } from 'react';

import styles from './TabButton.module.scss';

type Props = {
  title: string;
  tabId: string;
  onTabSelect: (id: string) => void;
  tabPanelId: string;
  isSelected: boolean;
  mode: OrientationMode;
  isDisabled?: boolean;
  stretched?: boolean;
  editable?: boolean;
  onTabTitleChange?: (newTitle: string) => void;
};

export const TabButton: FC<Props> = ({
  title,
  onTabSelect,
  onTabTitleChange,
  tabId,
  isSelected,
  isDisabled = false,
  stretched = false,
  editable = false,
  tabPanelId,
  mode,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);

  const isEditToggleVisible = editable && !isDisabled && isSelected;
  const wrapperClass = getClassName([
    styles.tab_wrapper,
    {
      [styles.tab_wrapper__disabled]: isDisabled,
      [styles.tab_wrapper__vertical]: mode === OrientationMode.Vertical,
      [styles.tab_wrapper__selected]: isSelected,
      [styles.tab_wrapper__stretched]: stretched,
      [styles.tab_wrapper__editable]: editable,
      [styles.tab_wrapper__inactive]: !isSelected,
    },
  ]);

  // Focus input when entering edit mode
  useEffect(() => {
    if (isEditMode && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditMode]);

  // Sync edit value with title prop
  useEffect(() => {
    setEditValue(title);
  }, [title]);

  const toggleEditMode = () => {
    if (isDisabled) return;
    setIsEditMode(!isEditMode);
  };

  const handleTabClick = () => {
    if (isEditMode) return; // Don't select tab while editing
    onTabSelect(tabId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleInputBlur = () => {
    saveTitleChange();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveTitleChange();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      cancelEdit();
    }
  };

  const saveTitleChange = () => {
    if (editValue.trim() && editValue !== title) {
      onTabTitleChange?.(editValue.trim());
    } else {
      // Reset to original title if empty or unchanged
      setEditValue(title);
    }
    setIsEditMode(false);
  };

  const cancelEdit = () => {
    setEditValue(title);
    setIsEditMode(false);
  };

  return (
    <span className={wrapperClass}>
      {isEditMode ? (
        <div className={styles.tab_editContainer}>
          <input
            ref={inputRef}
            id={tabId + '-input'}
            type='text'
            value={editValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            className={styles.editInput}
            maxLength={50}
          />
          <span>
            <Button
              view={ButtonView.Icon}
              icon={IconName.CheckMark}
              onClick={saveTitleChange}
              label='Save tab title'
              className={styles.saveButton}
            />
            <Button
              view={ButtonView.Icon}
              icon={IconName.Cancel}
              onClick={cancelEdit}
              label='Cancel tab title edit'
              className={styles.cancelButton}
            />
          </span>
        </div>
      ) : (
        <>
          <button
            role='tab'
            id={tabId}
            onClick={handleTabClick}
            aria-selected={isSelected}
            aria-controls={tabPanelId}
            className={styles.tab}
            disabled={isDisabled}
          >
            {editValue}
          </button>
          {isEditToggleVisible && (
            <Button
              view={ButtonView.Icon}
              icon={IconName.Edit}
              onClick={toggleEditMode}
              label='Edit tab title'
              className={styles.tab_editButton}
            />
          )}
        </>
      )}
    </span>
  );
};
