import type { GridColumn, GridItem } from '@types';
import type { ReactElement } from 'react';
import { describe, expect, it } from 'vitest';

import { getGridRowValues } from '../Grid.helpers';

describe('getGridRowValues', () => {
  it('should return correct values for each column when fields exist in item', () => {
    const item: GridItem = {
      id: '1',
      name: 'John',
      age: 30,
    };

    const columns: GridColumn[] = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
      { field: 'age', title: 'Age' },
    ];

    const result = getGridRowValues({ item, columns });

    expect(result).toEqual([
      {
        field: 'id',
        value: '1',
      },
      {
        field: 'name',
        value: 'John',
      },
      {
        field: 'age',
        value: '30',
      },
    ]);
  });

  it('should return empty strings when fields are missing or null in item', () => {
    const item: GridItem = {
      id: '1',
      name: null, // null value should be returned as empty string
    };

    const columns: GridColumn[] = [
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' }, // null value
      { field: 'age', title: 'Age' }, // missing field
    ];

    const result = getGridRowValues({ item, columns });

    expect(result).toEqual([
      {
        field: 'id',
        value: '1',
      },
      {
        field: 'name',
        value: '',
      },
      {
        field: 'age',
        value: '',
      },
    ]);
  });

  it('should return rendered JSX elements when renderDataItem is provided for object fields', () => {
    const item: GridItem = {
      id: 'test-id',
      details: '123 Main St',
    };

    const columns: GridColumn[] = [
      { field: 'id', title: 'ID' },
      { field: 'details', title: 'Details' }, // object field
    ];

    const renderDataItem = (item: GridItem, field: string) => (
      <span>{(item[field] as string).toUpperCase()}</span>
    );

    const result = getGridRowValues({ item, columns, renderDataItem });

    expect((result[0].value as ReactElement<HTMLTableRowElement>).props.children).toBe('TEST-ID');
    expect((result[1].value as ReactElement<HTMLTableRowElement>).props.children).toBe(
      '123 MAIN ST',
    );
  });

  it('should handle columns without a field by returning empty string', () => {
    const item: GridItem = {
      id: '4',
      name: 'Alice',
    };

    const columns: GridColumn[] = [
      { title: 'No Field', field: '' }, // No field provided
      { field: 'id', title: 'ID' },
      { field: 'name', title: 'Name' },
    ];

    const result = getGridRowValues({ item, columns });

    expect(result).toEqual([
      {
        field: '',
        value: '',
      },
      {
        field: 'id',
        value: '4',
      },
      {
        field: 'name',
        value: 'Alice',
      },
    ]);
  });
});
