import { ButtonProps } from '@models';
import { FC } from 'react';

import Button from '../Button';

export const ButtonExample: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
