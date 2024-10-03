import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import SelectAllGridRowsCheckbox from '../elements/SelectAll';

describe('SelectAllGridRowsCheckbox', () => {
  const mockedSelect = vi.fn();
  const mockedDeselect = vi.fn();
  const mockedGridId = 'grid-id';

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <SelectAllGridRowsCheckbox selectAll={mockedSelect} deselectAll={mockedDeselect} gridId={mockedGridId} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call select/deselect handlers', async () => {
    render(<SelectAllGridRowsCheckbox selectAll={mockedSelect} deselectAll={mockedDeselect} gridId={mockedGridId} />);

    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockedSelect).toHaveBeenCalledOnce();
    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockedDeselect).toHaveBeenCalledOnce();
  });
});
