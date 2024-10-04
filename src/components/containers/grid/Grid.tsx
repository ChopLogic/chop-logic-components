import ChopLogicGridBody from './elements/Body';
import ChopLogicGridHead from './elements/Head';
import { GridProps } from './types';

const ChopLogicGrid: React.FC<GridProps> = ({ columns, data, selectable = false }) => {
  console.log('columns', columns);
  console.log('data', data);
  return (
    <table>
      <ChopLogicGridHead />
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
