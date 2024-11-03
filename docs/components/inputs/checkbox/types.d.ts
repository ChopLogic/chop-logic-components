import { CommonInputProps } from '../../../../../../../../../src/utils/types';

export type ChopLogicCheckboxProps = CommonInputProps & {
  noLabel?: boolean;
  iconPosition?: 'left' | 'right';
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultChecked?: boolean;
};
