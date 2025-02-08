import { ChopLogicGridColumn, ChopLogicGridItem } from '@models';
import { describe, expect, it } from 'vitest';

import { getGridRowValues } from '../helpers';

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
      id: 'test-id',
      details: '123 Main St',
    };

    const columns: ChopLogicGridColumn[] = [
      { field: 'id', title: 'ID' },
      { field: 'details', title: 'Details' }, // object field
    ];

    const renderDataItem = (item: ChopLogicGridItem, field: string) => <span>{(item[field] as string).toUpperCase()}</span>;

    const result = getGridRowValues({ item, columns, renderDataItem });

    expect((result[0] as any).props.children).toBe('TEST-ID');
    expect((result[1] as any).props.children).toBe('123 MAIN ST');
  });

  it('should handle columns without a field by returning empty string', () => {
    const item: ChopLogicGridItem = {
      id: '4',
      name: 'Alice',
    };

    const columns: ChopLogicGridColumn[] = [
      { title: 'No Field', field: '' }, // No field provided
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
    ];

    const result = getGridRowValues({ item, columns });

    expect(result).toEqual(['', '4', 'Alice']);
  });
});
