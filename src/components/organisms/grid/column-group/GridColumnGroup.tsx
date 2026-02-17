import type { GridColumn } from '@types';
import { getClassName } from '@utils';
import type { FC } from 'react';

import './GridColumnGroup.css';

export const GridColumnGroup: FC<{ columns: GridColumn[]; selectable: boolean }> = ({
  columns,
  selectable,
}) => {
  return (
    <colgroup>
      {selectable && (
        <col className={getClassName(['cl-grid-column__column', 'cl-grid-column__column_first'])} />
      )}
      {columns.map((column, index) => (
        <col
          key={column?.title}
          className={getClassName([
            'cl-grid-column__column',
            column?.className,
            {
              'cl-grid-column__column_first': index === 0 && !selectable,
              'cl-grid-column__column_highlighted': !!column?.highlighted,
            },
          ])}
        />
      ))}
    </colgroup>
  );
};
