import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import GridRow, { GridRowProps } from '../elements/Row';

import { LIGHT_THEME } from '@css';

describe('GridRow', () => {
  const testProps: GridRowProps = {
    rowId: 'item-1',
    selectRowById: vi.fn(),
    deselectRowById: vi.fn(),
    selectable: true,
    values: ['Value 1', 'Value 2', <span key='value-3'>Value 3</span>],
    selectedIds: ['value1', 'value2', 'value3'],
    theme: LIGHT_THEME,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <tbody>
          <GridRow {...testProps} />
        </tbody>
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should not render a checkbox if the row is not selectable', () => {
    render(
      <table>
        <tbody>
          <GridRow {...testProps} selectable={false} />
        </tbody>
      </table>,
    );
    expect(screen.queryByRole('checkbox')).not.toBeInTheDocument();
  });
});
