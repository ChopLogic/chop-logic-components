import ChopLogicGridBody from './elements/Body';
import ChopLogicGridHead from './elements/Head';

const ChopLogicGrid = () => {
  return (
    <table>
      <ChopLogicGridHead />
      <ChopLogicGridBody />
    </table>
  );
};

export default ChopLogicGrid;
