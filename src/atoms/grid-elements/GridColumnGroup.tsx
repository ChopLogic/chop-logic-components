import React from 'react';
import { ChopLogicGridColumn } from '@models';
import styles from '@organisms/grid/Grid.module.scss';
import { getClassName } from '@utils';

export const GridColumnGroup: React.FC<{ columns: ChopLogicGridColumn[]; selectable: boolean }> = ({ columns, selectable }) => {
  return (
    <colgroup>
      {selectable && <col className={getClassName([styles.grid_column, styles.grid_column__first])} />}
      {columns.map((column, index) => (
        <col
          key={column?.title}
          className={getClassName([
            styles.grid_column,
            column?.className,
            {
              [styles.grid_column__first]: index === 0 && !selectable,
              [styles.grid_column__highlighted]: !!column?.highlighted,
            },
          ])}
        />
      ))}
    </colgroup>
  );
};
