import { ChopLogicGridColumn } from '@models';
import { getClassName } from '@utils';
import React from 'react';

import styles from './GridColumnGroup.module.scss';

export const GridColumnGroup: React.FC<{ columns: ChopLogicGridColumn[]; selectable: boolean }> = ({ columns, selectable }) => {
  return (
    <colgroup>
      {selectable && <col className={getClassName([styles.column, styles.column__first])} />}
      {columns.map((column, index) => (
        <col
          key={column?.title}
          className={getClassName([
            styles.column,
            column?.className,
            {
              [styles.column__first]: index === 0 && !selectable,
              [styles.column__highlighted]: !!column?.highlighted,
            },
          ])}
        />
      ))}
    </colgroup>
  );
};
