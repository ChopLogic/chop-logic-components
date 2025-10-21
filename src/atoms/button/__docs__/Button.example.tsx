import type { ButtonProps } from '@models';
import type { FC } from 'react';

import Button from '../Button';

export const ButtonExample: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};
