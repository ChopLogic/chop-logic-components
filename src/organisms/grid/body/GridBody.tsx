import type { GridColumn, GridItem, RenderDataItemCallback } from '@models';
import { getGridRowValues } from '@organisms/grid/Grid.helpers';
import type { FC } from 'react';

import { GridRow } from '../grid-row/GridRow';
import styles from './GridBody.module.scss';

type Props = {
  data: GridItem[];
  columns: GridColumn[];
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  renderDataItem?: RenderDataItemCallback;
  selectable: boolean;
};

export const GridBody: FC<Props> = ({
  selectRowById,
  deselectRowById,
  renderDataItem,
  selectedIds,
  selectable,
  data,
  columns,
}) => {
  return (
    <tbody className={styles.body}>
      {data.map((item) => {
        const gridRowValues = getGridRowValues({ item, columns, renderDataItem });
        return (
          <GridRow
            key={item.id}
            rowId={item.id}
            disabled={item?.disabled}
            selectRowById={selectRowById}
            deselectRowById={deselectRowById}
            selectable={selectable}
            values={gridRowValues}
            selectedIds={selectedIds}
          />
        );
      })}
    </tbody>
  );
};
