import { describe, expect, it } from 'vitest';

import { getNumericInputInitialValue } from '../helpers';

describe('getNumericInputInitialValue', () => {
  it('should return the value from initialValues if it exists', () => {
    const result = getNumericInputInitialValue({
      name: 'quantity',
      initialValues: { quantity: 5 },
      defaultValue: 10,
    });
    expect(result).toBe(5);
  });

  it('should return the defaultValue if initialValues does not exist', () => {
    const result = getNumericInputInitialValue({
      name: 'quantity',
      initialValues: {},
      defaultValue: 10,
    });
    expect(result).toBe(10);
  });

  it('should return 0 if neither initialValues nor defaultValue exist', () => {
    const result = getNumericInputInitialValue({
      name: 'quantity',
      initialValues: {},
    });
    expect(result).toBe(0);
  });

  it('should return 0 if defaultValue is not a number', () => {
    const result = getNumericInputInitialValue({
      name: 'quantity',
      initialValues: {},
      defaultValue: '10',
    });
    expect(result).toBe(0);
  });

  it('should convert the initialValues value to a number', () => {
    const result = getNumericInputInitialValue({
      name: 'quantity',
      initialValues: { quantity: '20' },
    });
    expect(result).toBe(20);
  });
});
