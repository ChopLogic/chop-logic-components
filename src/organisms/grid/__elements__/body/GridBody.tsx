import { ChopLogicGridColumn, ChopLogicGridItem, RenderDataItemCallback } from '@models';
import { getGridRowValues } from '@organisms/grid/Grid.helpers.ts';
import { FC } from 'react';

import { GridRow } from '../grid-row/GridRow';
import styles from './GridBody.module.scss';

type Props = {
  data: ChopLogicGridItem[];
  columns: ChopLogicGridColumn[];
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  renderDataItem?: RenderDataItemCallback;
  selectable: boolean;
};

export const GridBody: FC<Props> = ({ selectRowById, deselectRowById, renderDataItem, selectedIds, selectable, data, columns }) => {
  return (
    <tbody className={styles.body}>
      {data.map((item) => {
        const values = getGridRowValues({ item, columns, renderDataItem });
        return (
          <GridRow
            key={item.id}
            rowId={item.id}
            disabled={item?.disabled}
            selectRowById={selectRowById}
            deselectRowById={deselectRowById}
            selectable={selectable}
            values={values}
            selectedIds={selectedIds}
          />
        );
      })}
    </tbody>
  );
};
