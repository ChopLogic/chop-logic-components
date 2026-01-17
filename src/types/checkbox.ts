import type { ChangeEventHandler } from 'react';

import type { ChopLogicInputProps } from './_common';

export interface CheckboxProps extends ChopLogicInputProps {
  noLabel?: boolean;
  iconPosition?: 'left' | 'right';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
  checked?: boolean;
}
