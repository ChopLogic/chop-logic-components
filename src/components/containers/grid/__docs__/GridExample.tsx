import ChopLogicGrid from '../Grid';
import { ChopLogicGridProps } from '../types';

const GridExample: React.FC<ChopLogicGridProps> = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        paddingTop: '2rem',
      }}
    >
      <ChopLogicGrid {...props} />
    </div>
  );
};

export default GridExample;
