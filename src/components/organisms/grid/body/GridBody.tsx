import type { GridColumn, GridItem, RenderDataItemCallback } from '@types';
import type { FC } from 'react';
import { getGridRowValues } from '../Grid.helpers';

import { GridRow } from '../grid-row/GridRow';
import './GridBody.css';

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
    <tbody className="cl-grid-body">
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
