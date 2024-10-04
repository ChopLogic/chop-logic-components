import { useElementIds } from 'hooks/use-element-ids';

import ChopLogicGridBody from './elements/Body';
import ChopLogicGridHead from './elements/Head';
import { GridProps } from './types';

const ChopLogicGrid: React.FC<GridProps> = ({ columns, data, id, selectable = false }) => {
  console.log('columns', columns);
  console.log('data', data);
  const { elementId } = useElementIds(id);

  return (
    <table>
      <ChopLogicGridHead
        gridId={elementId}
        columns={columns}
        selectable={selectable}
        selectAll={() => console.log('select all')}
        deselectAll={() => console.log('deselect all')}
      />
      <ChopLogicGridBody
        columns={columns}
        data={data}
        selectable={selectable}
        selectRowById={(id: string) => console.log('select', id)}
        deselectRowById={(id: string) => console.log('deselect', id)}
      />
    </table>
  );
};

export default ChopLogicGrid;
