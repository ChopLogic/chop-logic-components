import React from 'react';
import { ChopLogicGridColumn, ChopLogicGridItem, ChopLogicTheme, RenderDataItemCallback } from '@models';

import { StyledGridBody } from '../Grid.styled';
import { getGridRowValues } from '../helpers';

import GridRow from './Row';

type ChopLogicGridBodyProps = {
  data: ChopLogicGridItem[];
  columns: ChopLogicGridColumn[];
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  renderDataItem?: RenderDataItemCallback;
  selectable: boolean;
  theme: ChopLogicTheme;
};

const ChopLogicGridBody: React.FC<ChopLogicGridBodyProps> = ({
  selectRowById,
  deselectRowById,
  renderDataItem,
  selectedIds,
  selectable,
  data,
  columns,
  theme,
}) => {
  return (
    <StyledGridBody $theme={theme}>
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
            theme={theme}
          />
        );
      })}
    </StyledGridBody>
  );
};

export default ChopLogicGridBody;
