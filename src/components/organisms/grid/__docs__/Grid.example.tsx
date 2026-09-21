import { Grid } from '@components/organisms';
import { GridSortDirection } from '@enums';
import type { GridProps, GridSortState } from '@types';
import { type FC, useState } from 'react';

export const GridExample: FC<GridProps> = (props) => {
  return <Grid {...props} />;
};

export const ControlledSortGridExample: FC<GridProps> = (props) => {
  const [sortState, setSortState] = useState<GridSortState>({
    field: 'company',
    direction: GridSortDirection.Asc,
  });

  const handleSortChange = (newState: GridSortState) => {
    setSortState(newState);
  };

  return (
    <Grid
      {...props}
      sortField={sortState.field ?? undefined}
      sortDirection={sortState.direction ?? undefined}
      onSortChange={handleSortChange}
    />
  );
};
