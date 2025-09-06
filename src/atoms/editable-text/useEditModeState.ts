import { useState } from 'react';

export const useEditModeState = (controlledEditMode?: boolean, readOnly?: boolean) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isControlled] = useState(controlledEditMode !== undefined);

  const editMode = isControlled ? !!controlledEditMode : isEditMode;

  const enterEditMode = () => {
    if (!isControlled && !readOnly) {
      setIsEditMode(true);
    }
  };

  const exitEditMode = () => {
    if (!isControlled) {
      setIsEditMode(false);
    }
  };

  return {
    editMode,
    enterEditMode,
    exitEditMode,
    isControlled,
  };
};
