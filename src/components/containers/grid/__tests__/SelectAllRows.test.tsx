import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import SelectAllGridRowsCheckbox from '../elements/SelectAllRows';

describe('SelectAllGridRowsCheckbox', () => {
  const mockedSelect = vi.fn();
  const mockedDeselect = vi.fn();
  const mockedGridId = 'grid-id';

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <SelectAllGridRowsCheckbox selectAll={mockedSelect} deselectAll={mockedDeselect} gridId={mockedGridId} isAllSelected />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call select handler', async () => {
    render(<SelectAllGridRowsCheckbox selectAll={mockedSelect} deselectAll={mockedDeselect} gridId={mockedGridId} isAllSelected={false} />);

    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockedSelect).toHaveBeenCalledOnce();
  });

  it('should call deselect handler', async () => {
    render(<SelectAllGridRowsCheckbox selectAll={mockedSelect} deselectAll={mockedDeselect} gridId={mockedGridId} isAllSelected={true} />);

    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockedDeselect).toHaveBeenCalledOnce();
  });
});
