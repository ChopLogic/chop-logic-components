import { getClassName } from '@utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import styles from './EditableText.module.scss';

export interface EditableTextProps {
  /** The current value of the text */
  value: string;
  /** If true, automatically selects all text when entering edit mode */
  autoSelectTextOnEditMode?: boolean;
  /** Controls whether the component is in edit mode */
  isEditMode?: boolean;
  /** If true, enables editing multiple lines of text */
  multiline?: boolean;
  /** Callback fired when the value changes */
  onChange?: (value: string) => void;
  /** Callback fired when the component is clicked */
  onClick?: (event: React.MouseEvent) => void;
  /** Placeholder text displayed when the value is empty */
  placeholder?: string;
  /** If true, the text is read-only and cannot be edited */
  readOnly?: boolean;
  /** Additional class name for styling */
  className?: string;
}

const ChopLogicEditableText: React.FC<EditableTextProps> = ({
  value,
  autoSelectTextOnEditMode = false,
  isEditMode: controlledEditMode,
  multiline = false,
  onChange,
  onClick,
  placeholder = 'Click to edit...',
  readOnly = false,
  className,
  ...rest
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [internalValue, setInternalValue] = useState(value);
  const [isControlled] = useState(controlledEditMode !== undefined);
  const editMode = isControlled ? controlledEditMode : isEditMode;
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);

  // Sync internal value with prop value
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  // Focus and select text when entering edit mode
  useEffect(() => {
    if (editMode && inputRef.current && !readOnly) {
      inputRef.current.focus();
      if (autoSelectTextOnEditMode) {
        inputRef.current.select();
      }
    }
  }, [editMode, autoSelectTextOnEditMode, readOnly]);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      onClick?.(event);
      if (!isControlled && !readOnly) {
        setIsEditMode(true);
      }
    },
    [onClick, isControlled, readOnly],
  );

  const handleBlur = useCallback(() => {
    if (!isControlled) {
      setIsEditMode(false);
    }
    // Only trigger onChange if value actually changed
    if (internalValue !== value) {
      onChange?.(internalValue);
    }
  }, [isControlled, internalValue, value, onChange]);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInternalValue(event.target.value);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && !multiline) {
        event.preventDefault();
        handleBlur();
      }
      if (event.key === 'Escape') {
        setInternalValue(value);
        if (!isControlled) {
          setIsEditMode(false);
        }
      }
    },
    [multiline, handleBlur, value, isControlled],
  );

  const InputComponent = multiline ? 'textarea' : 'input';
  const containerClass = getClassName([
    styles.editableText,
    className,
    {
      [styles.editableText__editMode]: editMode,
      [styles.editableText__readOnly]: readOnly,
      [styles.editableText__empty]: !internalValue,
    },
  ]);

  if (editMode && !readOnly) {
    return (
      <InputComponent
        ref={inputRef as any}
        value={internalValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={containerClass}
        rows={multiline ? 3 : undefined}
        {...rest}
      />
    );
  }

  return (
    <span
      onClick={handleClick}
      className={containerClass}
      role='button'
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e as any);
        }
      }}
      {...rest}
    >
      {internalValue || placeholder}
    </span>
  );
};

export default ChopLogicEditableText;
