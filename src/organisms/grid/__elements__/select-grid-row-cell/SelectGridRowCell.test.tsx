import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { SelectGridRowCell } from './SelectGridRowCell';

describe('SelectGridRowCheckbox', () => {
  const mockedSelect = vi.fn();
  const mockedDeselect = vi.fn();
  const mockedRowId = 'grid-id';

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <thead>
          <tr>
            <SelectGridRowCell selectRowById={mockedSelect} deselectRowById={mockedDeselect} rowId={mockedRowId} isRowSelected />
          </tr>
        </thead>
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call select handler', async () => {
    render(
      <table>
        <thead>
          <tr>
            <SelectGridRowCell selectRowById={mockedSelect} deselectRowById={mockedDeselect} rowId={mockedRowId} isRowSelected={false} />
          </tr>
        </thead>
      </table>,
    );

    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockedSelect).toHaveBeenCalledOnce();
  });

  it('should call deselect handler', async () => {
    render(
      <table>
        <thead>
          <tr>
            <SelectGridRowCell selectRowById={mockedSelect} deselectRowById={mockedDeselect} rowId={mockedRowId} isRowSelected />
          </tr>
        </thead>
      </table>,
    );

    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockedDeselect).toHaveBeenCalledOnce();
  });
});
