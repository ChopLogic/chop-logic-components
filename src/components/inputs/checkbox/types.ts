import { ChangeEventHandler } from 'react';
import { CommonInputProps } from 'utils/types';

export type ChopLogicCheckboxProps = CommonInputProps & {
  noLabel?: boolean;
  iconPosition?: 'left' | 'right';
  onChange?: ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
};
