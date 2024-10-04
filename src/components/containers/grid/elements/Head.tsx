import { GridColumn } from '../types';

import GridHeaderCell from './HeaderCell';
import SelectAllGridRowsCheckbox from './SelectAllRows';

type ChopLogicGridHeadProps = {
  columns: GridColumn[];
  gridId: string;
  selectable: boolean;
  selectAll: () => void;
  deselectAll: () => void;
};

const ChopLogicGridHead: React.FC<ChopLogicGridHeadProps> = ({ columns, gridId, selectAll, deselectAll, selectable }) => {
  return (
    <thead>
      <tr>
        {selectable && <SelectAllGridRowsCheckbox gridId={gridId} selectAll={selectAll} deselectAll={deselectAll} />}
        {columns.map((column) => (
          <GridHeaderCell key={`${column.title}_${gridId}`} title={column.title} component={column.component} />
        ))}
      </tr>
    </thead>
  );
};

export default ChopLogicGridHead;
