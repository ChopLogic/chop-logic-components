import { ChangeEventHandler } from 'react';

import { ChopLogicInputProps } from '../common';

export interface ChopLogicCheckboxProps extends ChopLogicInputProps {
  noLabel?: boolean;
  iconPosition?: 'left' | 'right';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
}
