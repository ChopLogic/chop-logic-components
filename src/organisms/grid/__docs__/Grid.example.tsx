import { ChopLogicGridProps } from '@models';
import { ChopLogicGrid } from '@organisms';
import { FC } from 'react';

export const GridExample: FC<ChopLogicGridProps> = (props) => {
  return <ChopLogicGrid {...props} />;
};
