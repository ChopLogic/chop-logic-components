import ChopLogicGrid from '../Grid';
import { GridColumn, GridItem } from '../types';

const gridColumns: GridColumn[] = [
  { title: 'Col 1', field: 'field1' },
  { title: 'Col 2', field: 'field2' },
  { title: 'Col 3', field: 'field3' },
  { title: 'Col 4', field: 'field4' },
];

const gridData: GridItem[] = [
  { id: 'row1', field1: 'Value 1', field2: 'Value 2', field3: 'Value 3', field4: 'Value 4' },
  { id: 'row2', field1: 'Value 5', field2: 'Value 6', field3: 'Value 7', field4: 'Value 8' },
  { id: 'row3', field1: 'Value 9', field2: 'Value 10', field3: 'Value 11', field4: 'Value 12' },
  { id: 'row4', field1: 'Value 13', field2: 'Value 14', field3: 'Value 15', field4: 'Value 16' },
];

const GridExample: React.FC = (props) => {
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
      <ChopLogicGrid columns={gridColumns} data={gridData} {...props} />
    </div>
  );
};

export default GridExample;
