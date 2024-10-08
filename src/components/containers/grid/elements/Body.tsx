import { StyledGridBody } from '../Grid.styled';
import { getGridRowValues } from '../helpers';
import { ChopLogicGridColumn, ChopLogicGridItem } from '../types';

import GridRow from './Row';

type ChopLogicGridBodyProps = {
  data: ChopLogicGridItem[];
  columns: ChopLogicGridColumn[];
  selectedIds: string[];
  selectRowById: (id: string) => void;
  deselectRowById: (id: string) => void;
  selectable: boolean;
};

const ChopLogicGridBody: React.FC<ChopLogicGridBodyProps> = ({
  selectRowById,
  deselectRowById,
  selectedIds,
  selectable,
  data,
  columns,
}) => {
  return (
    <StyledGridBody>
      {data.map((item) => {
        const values = getGridRowValues({ item, columns });
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
    </StyledGridBody>
  );
};

export default ChopLogicGridBody;
