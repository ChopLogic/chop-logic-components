import { ButtonProps } from '@models';
import { FC } from 'react';

import Button from '../Button.tsx';

export const ButtonExample: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
