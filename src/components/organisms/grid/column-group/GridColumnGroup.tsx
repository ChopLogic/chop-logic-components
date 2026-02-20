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
      {selectable && <col className="cl-grid-column cl-grid-column_first cl-grid-column_check" />}
      {columns.map((column, index) => (
        <col
          key={column?.title}
          className={getClassName([
            'cl-grid-column',
            column?.className,
            {
              'cl-grid-column_first': index === 0 && !selectable,
              'cl-grid-column_highlighted': !!column?.highlighted,
            },
          ])}
        />
      ))}
    </colgroup>
  );
};
