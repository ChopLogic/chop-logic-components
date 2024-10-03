import ChopLogicGridBody from './elements/Body';
import ChopLogicGridHead from './elements/Head';
import { GridProps } from './types';

const ChopLogicGrid: React.FC<GridProps> = () => {
  return (
    <table>
      <ChopLogicGridHead />
      <ChopLogicGridBody />
    </table>
  );
};

export default ChopLogicGrid;
