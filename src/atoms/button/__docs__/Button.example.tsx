import { ChopLogicButtonProps } from '@models';
import { FC } from 'react';

import Button from '../Button.tsx';

export const ChopLogicButtonExample: FC<ChopLogicButtonProps> = (props) => {
  return <Button {...props} />;
};
