import { RefObject, useEffect } from 'react';

export const useInputFocus = (
  ref: RefObject<HTMLTextAreaElement | HTMLInputElement | null>,
  editMode: boolean,
  autoSelectTextOnEditMode?: boolean,
  readOnly?: boolean,
) => {
  useEffect(() => {
    if (editMode && ref.current && !readOnly) {
      ref.current.focus();
      if (autoSelectTextOnEditMode) {
        ref.current.select();
      }
    }
  }, [editMode, autoSelectTextOnEditMode, readOnly, ref]);
};
