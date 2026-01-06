import { render } from '@testing-library/react';
import type { GridColumn } from '@types';
import { describe, expect, it } from 'vitest';
import { GridColumnGroup } from '../column-group/GridColumnGroup';

describe('GridBody', () => {
  const columns: GridColumn[] = [
    { title: 'Col 1', field: 'field1', highlighted: true },
    { title: 'Col 2', field: 'field2', className: 'column-class' },
    { title: 'Col 3', field: 'field3' },
  ];

  it('should match the snapshot', () => {
    const { asFragment } = render(
      <table>
        <GridColumnGroup columns={columns} selectable />
      </table>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
