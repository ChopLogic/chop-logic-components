import { ChangeEventHandler } from 'react';

import { CommonInputProps } from './_common';

export type ChopLogicCheckboxProps = CommonInputProps & {
  noLabel?: boolean;
  iconPosition?: 'left' | 'right';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
};
