import { Grid } from '@components/organisms';
import { GridFilterType } from '@enums';
import type { GridColumn, GridFilterState, GridItem, GridProps } from '@types';
import { type FC, useState } from 'react';

export const GridExample: FC<GridProps> = (props) => {
  return <Grid {...props} />;
};

// Shared, richer dataset used across the Grid stories. More columns and rows
// make the sorting/filtering behavior easier to explore visually.
export const sampleColumns: GridColumn[] = [
  { title: 'Company', field: 'company' },
  { title: 'Contact', field: 'contact' },
  { title: 'Email', field: 'email' },
  { title: 'Country', field: 'country' },
  { title: 'City', field: 'city' },
  { title: 'Role', field: 'role' },
  { title: 'Status', field: 'status' },
  { title: 'Phone', field: 'phone' },
];

export const sampleData: GridItem[] = [
  {
    id: 'row1',
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    email: 'maria.anders@alfreds.example',
    country: 'Germany',
    city: 'Berlin',
    role: 'Sales Representative',
    status: 'Active',
    phone: '123-345-7890',
  },
  {
    id: 'row2',
    company: 'Centro Comercial Moctezuma',
    contact: 'Francisco Chang',
    email: 'f.chang@moctezuma.example',
    country: 'Mexico',
    city: 'Mexico City',
    role: 'Marketing Manager',
    status: 'Active',
    phone: '234-456-8901',
  },
  {
    id: 'row3',
    company: 'Ernst Handel',
    contact: 'Roland Mendel',
    email: 'roland.mendel@ernsthandel.example',
    country: 'Austria',
    city: 'Graz',
    role: 'Sales Manager',
    status: 'On Leave',
    phone: '345-567-9012',
  },
  {
    id: 'row4',
    company: 'Island Trading',
    contact: 'Helen Bennett',
    email: 'helen.bennett@island.example',
    country: 'UK',
    city: 'Cowes',
    role: 'Marketing Assistant',
    status: 'Active',
    phone: '456-678-0123',
  },
  {
    id: 'row5',
    company: 'Laughing Bacchus Winecellars',
    contact: 'Yoshi Tannamuri',
    email: 'yoshi.t@bacchus.example',
    country: 'Canada',
    city: 'Vancouver',
    role: 'Marketing Assistant',
    status: 'Inactive',
    phone: '567-789-1234',
  },
  {
    id: 'row6',
    company: 'Magazzini Alimentari Riuniti',
    contact: 'Giovanni Rovelli',
    email: 'g.rovelli@magazzini.example',
    country: 'Italy',
    city: 'Bergamo',
    role: 'Accounting Manager',
    status: 'Active',
    phone: '678-890-2345',
  },
  {
    id: 'row7',
    company: 'Königlich Essen',
    contact: 'Philip Cramer',
    email: 'philip.cramer@essen.example',
    country: 'Germany',
    city: 'Brandenburg',
    role: 'Sales Associate',
    status: 'Active',
    phone: '789-901-3456',
  },
  {
    id: 'row8',
    company: 'La Maison d’Asie',
    contact: 'Annette Roulet',
    email: 'annette.roulet@maison.example',
    country: 'France',
    city: 'Toulouse',
    role: 'Sales Manager',
    status: 'On Leave',
    phone: '890-012-4567',
  },
  {
    id: 'row9',
    company: 'Blondesddsl père et fils',
    contact: 'Frédérique Citeaux',
    email: 'f.citeaux@blondesddsl.example',
    country: 'France',
    city: 'Strasbourg',
    role: 'Marketing Manager',
    status: 'Active',
    phone: '901-123-5678',
  },
  {
    id: 'row10',
    company: 'Océano Atlántico Ltda.',
    contact: 'Yvonne Moncada',
    email: 'yvonne.moncada@oceano.example',
    country: 'Argentina',
    city: 'Buenos Aires',
    role: 'Sales Agent',
    status: 'Inactive',
    phone: '012-234-6789',
  },
  {
    id: 'row11',
    company: 'Bottom-Dollar Markets',
    contact: 'Elizabeth Lincoln',
    email: 'e.lincoln@bottomdollar.example',
    country: 'Canada',
    city: 'Tsawassen',
    role: 'Accounting Manager',
    status: 'Active',
    phone: '135-246-7890',
  },
  {
    id: 'row12',
    company: 'Great Lakes Food Market',
    contact: 'Howard Snyder',
    email: 'howard.snyder@greatlakes.example',
    country: 'USA',
    city: 'Eugene',
    role: 'Marketing Manager',
    status: 'Active',
    phone: '246-357-8901',
  },
];

export const ControlledFilterExample: FC = () => {
  const [filterState, setFilterState] = useState<GridFilterState>({
    country: [{ type: GridFilterType.Includes, value: 'a', caseSensitive: false }],
  });

  const columns: GridColumn[] = [
    { title: 'Company', field: 'company', filterable: true },
    { title: 'Contact', field: 'contact', filterable: true },
    { title: 'Country', field: 'country', filterable: true },
    { title: 'City', field: 'city', filterable: true },
    { title: 'Role', field: 'role', filterable: true },
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
        data={sampleData}
        filterState={filterState}
        onFilterChange={setFilterState}
        caption="Controlled Filter Grid"
      />
    </div>
  );
};
