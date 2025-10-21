import { SelectAllGridRowsCell } from '@organisms/grid/select-all-grid-rows-cell/SelectAllGridRowsCell';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

describe('SelectAllRowsCell', () => {
  const mockedSelect = vi.fn();
  const mockedDeselect = vi.fn();
  const mockedGridId = 'grid-id';

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <thead>
          <tr>
            <SelectAllGridRowsCell
              selectAll={mockedSelect}
              deselectAll={mockedDeselect}
              gridId={mockedGridId}
              isAllSelected
            />
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
            <SelectAllGridRowsCell
              selectAll={mockedSelect}
              deselectAll={mockedDeselect}
              gridId={mockedGridId}
              isAllSelected={false}
            />
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
            <SelectAllGridRowsCell
              selectAll={mockedSelect}
              deselectAll={mockedDeselect}
              gridId={mockedGridId}
              isAllSelected
            />
          </tr>
        </thead>
      </table>,
    );

    await userEvent.click(screen.getByRole('checkbox'));
    expect(mockedDeselect).toHaveBeenCalledOnce();
  });
});
