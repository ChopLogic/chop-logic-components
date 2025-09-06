import { ChopLogicSelectValue } from '@models';
import { describe, expect, it } from 'vitest';

import { getSelectInitialValue } from './Select.helpers.ts';

describe('getSelectInitialValue', () => {
  const options: ChopLogicSelectValue[] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  it('should return the value from initialValues if present', () => {
    const initialValues = { mySelect: '2' };
    const result = getSelectInitialValue({
      name: 'mySelect',
      options,
      initialValues,
    });
    expect(result).toEqual({ id: '2', label: 'Option 2' });
  });

  it('should return the value from defaultValue if initialValues is not present', () => {
    const defaultValue = '3';
    const result = getSelectInitialValue({
      name: 'mySelect',
      options,
      defaultValue,
    });
    expect(result).toEqual({ id: '3', label: 'Option 3' });
  });

  it('should return undefined if the value is not found in options', () => {
    const initialValues = { mySelect: '4' };
    const result = getSelectInitialValue({
      name: 'mySelect',
      options,
      initialValues,
    });
    expect(result).toBeUndefined();
  });

  it('should prioritize initialValues over defaultValue', () => {
    const initialValues = { mySelect: '1' };
    const defaultValue = '2';
    const result = getSelectInitialValue({
      name: 'mySelect',
      options,
      initialValues,
      defaultValue,
    });
    expect(result).toEqual({ id: '1', label: 'Option 1' });
  });

  it('should return undefined if both initialValues and defaultValue are not provided', () => {
    const result = getSelectInitialValue({
      name: 'mySelect',
      options,
    });
    expect(result).toBeUndefined();
  });

  it('should handle complex initialValues with ChopLogicSelectValue objects', () => {
    const initialValues = { mySelect: { id: '2', label: 'Option 2' } };
    const result = getSelectInitialValue({
      name: 'mySelect',
      options,
      initialValues,
    });
    expect(result).toEqual({ id: '2', label: 'Option 2' });
  });
});
