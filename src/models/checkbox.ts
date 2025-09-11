import { ChangeEventHandler } from 'react';

import { ChopLogicInputProps } from './_common';

export interface CheckboxProps extends ChopLogicInputProps {
  noLabel?: boolean;
  iconPosition?: 'left' | 'right';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
}
