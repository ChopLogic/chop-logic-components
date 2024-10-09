import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ChopLogicGrid from '../Grid';

describe('ChopLogicGrid', () => {
  const columns = [
    { title: 'Company', field: 'company' },
    { title: 'Contact', field: 'contact' },
    { title: 'Country', field: 'country' },
    { title: 'Phone', field: 'phone' },
  ];
  const data = [
    { id: 'row1', company: '', contact: 'Maria', country: 'Germany', phone: '123-345-7890' },
    { id: 'row2', company: '', contact: 'Francisco', country: 'Mexico', phone: '123-345-7890' },
    { id: 'row3', company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria', phone: '123-345-7890' },
    { id: 'row4', company: 'Island Trading', contact: 'Helen Bennett', country: 'UK', phone: '123-345-7890' },
    { id: 'row5', company: 'Laughing Bacchus', contact: '', country: 'Canada', phone: '123-345-7890' },
    { id: 'row6', company: '', contact: 'Giovanni', country: 'Italy', phone: '123-345-7890' },
  ];

  it('should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicGrid columns={columns} data={data} selectable />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not render the checkbox column if the grid is not selectable', () => {
    render(<ChopLogicGrid columns={columns} data={data} selectable={false} />);
    expect(screen.queryAllByRole('checkbox')).toHaveLength(0);
  });

  it('should render an optional caption', () => {
    render(<ChopLogicGrid columns={columns} data={data} selectable={false} caption='Test Caption' />);
    expect(screen.getByText('Test Caption')).toBeInTheDocument();
  });
});
