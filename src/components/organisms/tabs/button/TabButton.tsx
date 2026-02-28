import { Button } from '@components/atoms';
import { ButtonView, ElementSize, IconName, OrientationMode } from '@enums';
import { getClassName } from '@utils';
import { type FC, useEffect, useId, useRef, useState } from 'react';

import { TabEditInput } from '../edit-input/TabEditInput';
import './TabButton.css';

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
  onTabDelete?: (id: string) => void;
  extendable?: boolean;
};

export const TabButton: FC<Props> = ({
  title,
  onTabSelect,
  onTabTitleChange,
  onTabDelete,
  tabId,
  isSelected,
  isDisabled = false,
  stretched = false,
  editable = false,
  extendable = false,
  tabPanelId,
  mode,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const inputRef = useRef<HTMLInputElement>(null);
  const cancelButtonId = useId();
  const isEditToggleVisible = editable && !isDisabled && isSelected;
  const isDeleteButtonVisible = extendable && !isDisabled && !!onTabDelete && isSelected;
  const hasAdditionalButtons = isEditToggleVisible || isDeleteButtonVisible;

  const wrapperClass = getClassName([
    'cl-tab__wrapper',
    {
      'cl-tab__wrapper_disabled': isDisabled,
      'cl-tab__wrapper_vertical': mode === OrientationMode.Vertical,
      'cl-tab__wrapper_selected': isSelected,
      'cl-tab__wrapper_stretched': stretched,
      'cl-tab__wrapper_editable': editable,
      'cl-tab__wrapper_inactive': !isSelected,
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

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Check if the blur was caused by clicking on a cancel button
    const relatedTarget = e.relatedTarget as HTMLElement;
    const isBlurCausedByButton = relatedTarget?.id === cancelButtonId;

    // Only call onInputBlur if the blur wasn't caused by a button click
    if (!isBlurCausedByButton) {
      saveTitleChange();
    }
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
        <TabEditInput
          tabId={tabId}
          editValue={editValue}
          isEditMode={isEditMode}
          onInputChange={handleInputChange}
          onInputBlur={handleInputBlur}
          onInputKeyDown={handleInputKeyDown}
          onSave={saveTitleChange}
          onCancel={cancelEdit}
          cancelButtonId={cancelButtonId}
        />
      ) : (
        <>
          <button
            role="tab"
            id={tabId}
            onClick={handleTabClick}
            aria-selected={isSelected}
            aria-controls={tabPanelId}
            className="cl-tab"
            disabled={isDisabled}
          >
            {editValue}
          </button>
          {hasAdditionalButtons && (
            <span className="cl-tab__buttons">
              {isEditToggleVisible && (
                <Button
                  view={ButtonView.Icon}
                  icon={IconName.Edit3}
                  onClick={toggleEditMode}
                  label="Edit tab"
                  tooltip="Edit tab"
                  iconSize={ElementSize.Small}
                />
              )}
              {isDeleteButtonVisible && (
                <Button
                  view={ButtonView.Icon}
                  icon={IconName.Trash2}
                  onClick={() => onTabDelete?.(tabId)}
                  label="Delete tab"
                  tooltip="Delete tab"
                  iconSize={ElementSize.Small}
                />
              )}
            </span>
          )}
        </>
      )}
    </span>
  );
};
