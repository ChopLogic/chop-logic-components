import type { GridProps } from '@models';
import { Grid } from '@organisms';
import type { FC } from 'react';

export const GridExample: FC<GridProps> = (props) => {
  return <Grid {...props} />;
};
