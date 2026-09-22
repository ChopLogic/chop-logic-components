import { Grid } from '@components/organisms';
import type { GridProps } from '@types';
import type { FC } from 'react';

export const GridExample: FC<GridProps> = (props) => {
  return <Grid {...props} />;
};
