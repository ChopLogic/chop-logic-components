import type { MouseEvent } from 'react';

import type { ChopLogicComponentProps } from './_common';

export interface EditableTextProps extends ChopLogicComponentProps {
  value: string;
  autoSelectTextOnEditMode?: boolean;
  isEditMode?: boolean;
  multiline?: boolean;
  onChange?: (value: string) => void;
  onClick?: (event: MouseEvent) => void;
  placeholder?: string;
  readOnly?: boolean;
}
