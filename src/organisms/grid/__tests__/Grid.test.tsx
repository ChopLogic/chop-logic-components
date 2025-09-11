import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import Grid from '../Grid';

describe('Grid', () => {
  const testProps = {
    id: 'grid-id',
    columns: [
      { title: 'Company', field: 'company' },
      { title: 'Contact', field: 'contact' },
      { title: 'Country', field: 'country' },
      { title: 'Phone', field: 'phone' },
    ],
    data: [
      { id: 'row1', company: '', contact: 'Maria', country: 'Germany', phone: '123-345-7890' },
      { id: 'row2', company: '', contact: 'Francisco', country: 'Mexico', phone: '123-345-7890' },
      { id: 'row3', company: 'Ernst Handel', contact: 'Roland Mendel', country: 'Austria', phone: '123-345-7890' },
      { id: 'row4', company: 'Island Trading', contact: 'Helen Bennett', country: 'UK', phone: '123-345-7890' },
      { id: 'row5', company: 'Laughing Bacchus', contact: '', country: 'Canada', phone: '123-345-7890' },
      { id: 'row6', company: '', contact: 'Giovanni', country: 'Italy', phone: '123-345-7890' },
    ],
    className: 'test-class',
    style: { width: 100 },
    tabIndex: -1,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<Grid {...testProps} selectable />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not render the checkbox column if the grid is not selectable', () => {
    render(<Grid {...testProps} selectable={false} />);
    expect(screen.queryAllByRole('checkbox')).toHaveLength(0);
  });

  it('should render an optional caption', () => {
    render(<Grid {...testProps} selectable={false} caption='Test Caption' />);
    expect(screen.getByText('Test Caption')).toBeInTheDocument();
  });

  it('should call onSelect() handler when a checkbox is clicked', async () => {
    const mockSelect = vi.fn();
    render(<Grid {...testProps} selectable caption='Test Caption' onSelect={mockSelect} />);
    const firstCheckbox = screen.getAllByRole('checkbox')[0];
    const secondCheckbox = screen.getAllByRole('checkbox')[1];
    await userEvent.click(firstCheckbox);
    expect(mockSelect).toHaveBeenCalledWith(['row1', 'row2', 'row3', 'row4', 'row5', 'row6']);
    await userEvent.click(firstCheckbox);
    expect(mockSelect).toHaveBeenCalledWith([]);
    await userEvent.click(secondCheckbox);
    expect(mockSelect).toHaveBeenCalledWith(['row1']);
  });
});
