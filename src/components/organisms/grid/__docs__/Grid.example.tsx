import { Grid } from '@components/organisms';
import { GridFilterType } from '@enums';
import type { GridFilterState, GridProps } from '@types';
import { type FC, useState } from 'react';

export const GridExample: FC<GridProps> = (props) => {
  return <Grid {...props} />;
};

const controlledFilterData = [
  {
    id: 'row1',
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany',
    phone: '123-345-7890',
  },
  {
    id: 'row2',
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico',
    phone: '234-456-8901',
  },
  {
    id: 'row3',
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    country: 'Austria',
    phone: '345-567-9012',
  },
  {
    id: 'row4',
    company: 'Island Trading',
    contact: 'Helen Bennett',
    country: 'UK',
    phone: '456-678-0123',
  },
  {
    id: 'row5',
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    country: 'Canada',
    phone: '567-789-1234',
  },
  {
    id: 'row6',
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    country: 'Italy',
    phone: '678-890-2345',
  },
];

export const ControlledFilterExample: FC = () => {
  const [filterState, setFilterState] = useState<GridFilterState>({
    country: [{ type: GridFilterType.Includes, value: 'a', caseSensitive: false }],
  });

  const columns = [
    { title: 'Company', field: 'company', filterable: true },
    { title: 'Contact', field: 'contact', filterable: true },
    { title: 'Country', field: 'country', filterable: true },
    { title: 'Phone', field: 'phone', filterable: false },
  ];

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <strong>Current Filter State:</strong>
        <pre style={{ background: '#f5f5f5', padding: '0.5rem', borderRadius: '4px' }}>
          {JSON.stringify(filterState, null, 2)}
        </pre>
      </div>
      <Grid
        columns={columns}
        data={controlledFilterData}
        filterState={filterState}
        onFilterChange={setFilterState}
        caption="Controlled Filter Grid"
      />
    </div>
  );
};
