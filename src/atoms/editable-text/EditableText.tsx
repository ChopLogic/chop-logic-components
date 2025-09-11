import { EditableTextProps } from '@models';
import { getClassName } from '@utils';
import { FC, useCallback, useRef } from 'react';

import styles from './EditableText.module.scss';
import { EditView } from './EditView';
import { ReadView } from './ReadView';
import { useEditModeState } from './useEditModeState';
import { useInputFocus } from './useInputFocus';
import { useValueState } from './useValueState';

const EditableText: FC<EditableTextProps> = ({
  value,
  isEditMode: controlledEditMode,
  onChange,
  onClick,
  className,
  autoSelectTextOnEditMode = false,
  multiline = false,
  placeholder = 'Click to edit...',
  readOnly = false,
  ...rest
}) => {
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  const { editMode, enterEditMode, exitEditMode } = useEditModeState(controlledEditMode, readOnly);
  const { internalValue, updateValue, commitValue, resetValue } = useValueState(value, onChange);

  useInputFocus(inputRef, editMode, autoSelectTextOnEditMode, readOnly);

  const handleClick = useCallback(
    (event: React.MouseEvent) => {
      onClick?.(event);
      enterEditMode();
    },
    [onClick, enterEditMode],
  );

  const handleBlur = useCallback(() => {
    exitEditMode();
    commitValue();
  }, [exitEditMode, commitValue]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' && !multiline) {
        event.preventDefault();
        handleBlur();
      }
      if (event.key === 'Escape') {
        resetValue();
        exitEditMode();
      }
    },
    [multiline, handleBlur, resetValue, exitEditMode],
  );

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
      <EditView
        multiline={multiline}
        value={internalValue}
        placeholder={placeholder}
        onChange={updateValue}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={containerClass}
        inputRef={inputRef}
        {...rest}
      />
    );
  }

  return <ReadView value={internalValue} placeholder={placeholder} onClick={handleClick} className={containerClass} {...rest} />;
};

export default EditableText;
