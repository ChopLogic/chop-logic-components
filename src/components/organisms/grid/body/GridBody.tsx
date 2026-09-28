import type { GridColumn, GridItem, RenderDataItemCallback } from '@types';
import type { FC } from 'react';
import { GridEmptyState } from '../empty-state/GridEmptyState';
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
  isEmpty: boolean;
  colSpan: number;
};

export const GridBody: FC<Props> = ({
  selectRowById,
  deselectRowById,
  renderDataItem,
  selectedIds,
  selectable,
  data,
  columns,
  isEmpty,
  colSpan,
}) => {
  return (
    <tbody className="cl-grid-body">
      {isEmpty ? (
        <GridEmptyState colSpan={colSpan} />
      ) : (
        data.map((item) => {
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
        })
      )}
    </tbody>
  );
};
