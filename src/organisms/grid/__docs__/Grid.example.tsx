import { GridProps } from '@models';
import { Grid } from '@organisms';
import { FC } from 'react';

export const GridExample: FC<GridProps> = (props) => {
  return <Grid {...props} />;
};
