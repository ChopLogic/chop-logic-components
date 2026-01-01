import { Grid } from '@components/organisms';
import type { GridProps } from '@models';
import type { FC } from 'react';

export const GridExample: FC<GridProps> = (props) => {
  return <Grid {...props} />;
};
