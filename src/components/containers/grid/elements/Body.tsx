import React from 'react';
import { ChopLogicGridColumn, ChopLogicGridItem, RenderDataItemCallback } from '@models';
import { getGridRowValues } from '../helpers';
import GridRow from './Row';
import styles from '../Grid.module.scss';

type ChopLogicGridBodyProps = {
  data: ChopLogicGridItem[];
  columns: ChopLogicGridColumn[];
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  renderDataItem?: RenderDataItemCallback;
  selectable: boolean;
};

const ChopLogicGridBody: React.FC<ChopLogicGridBodyProps> = ({
  selectRowById,
  deselectRowById,
  renderDataItem,
  selectedIds,
  selectable,
  data,
  columns,
}) => {
  return (
    <tbody className={styles.grid_body}>
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

export default ChopLogicGridBody;
