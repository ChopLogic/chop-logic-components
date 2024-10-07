import { describe, expect, it } from 'vitest';

import { getGridRowValues } from '../helpers';
import { ChopLogicGridColumn, ChopLogicGridItem } from '../types';

describe('getGridRowValues', () => {
  it('should return correct values for each column when fields exist in item', () => {
    const item: ChopLogicGridItem = {
      id: '1',
      name: 'John',
      age: 30,
    };

    const columns: ChopLogicGridColumn[] = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
      { field: 'age', title: 'Age' },
    ];

    const result = getGridRowValues({ item, columns });

    expect(result).toEqual(['1', 'John', '30']);
  });

  it('should return empty strings when fields are missing or null in item', () => {
    const item: ChopLogicGridItem = {
      id: '1',
      name: null, // null value should be returned as empty string
    };

    const columns: ChopLogicGridColumn[] = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' }, // null value
      { field: 'age', title: 'Age' }, // missing field
    ];

    const result = getGridRowValues({ item, columns });

    expect(result).toEqual(['1', '', '']);
  });

  it('should return rendered JSX elements when renderDataItem is provided for object fields', () => {
    const item: ChopLogicGridItem = {
      id: '2',
      details: { address: '123 Main St' },
    };

    const columns: ChopLogicGridColumn[] = [
      { field: 'id', title: 'ID' },
      { field: 'details', title: 'Details' }, // object field
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderDataItem = (item: ChopLogicGridItem) => <div>{(item.details as any).address}</div>;

    const result = getGridRowValues({ item, columns, renderDataItem });

    expect(result[0]).toBe('2');
    expect((result[1] as JSX.Element).props.children).toBe('123 Main St'); // Check if JSX is rendered correctly
  });

  it('should return empty string when renderDataItem is not provided for object fields', () => {
    const item: ChopLogicGridItem = {
      id: '3',
      details: { address: '456 Another St' },
    };

    const columns: ChopLogicGridColumn[] = [
      { field: 'id', title: 'ID' },
      { field: 'details', title: 'Details' }, // object field without renderDataItem
    ];

    const result = getGridRowValues({ item, columns });

    expect(result).toEqual(['3', '']);
  });

  it('should handle columns without a field by returning empty string', () => {
    const item: ChopLogicGridItem = {
      id: '4',
      name: 'Alice',
    };

    const columns: ChopLogicGridColumn[] = [
      { title: 'No Field' }, // No field provided
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
    ];

    const result = getGridRowValues({ item, columns });

    expect(result).toEqual(['', '4', 'Alice']);
  });
});
