import type { NumericInputValidator } from '@models';
import { describe, expect, it } from 'vitest';

import { getNumericInputInitialValue, validateNumericInputValue } from '../NumericInput.helpers';

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

describe('validateNumericInputValue', () => {
  it('should return false when value is required but undefined', () => {
    const result = validateNumericInputValue({ value: undefined, required: true });
    expect(result).toBe(false);
  });

  it('should return true when value is not required and undefined', () => {
    const result = validateNumericInputValue({ value: undefined, required: false });
    expect(result).toBe(true);
  });

  it('should return true when value is provided and required is true', () => {
    const result = validateNumericInputValue({ value: 10, required: true });
    expect(result).toBe(true);
  });

  it('should return true when validator is a function and returns true', () => {
    const mockValidator: NumericInputValidator = (input?: number) => input === 10;
    const result = validateNumericInputValue({ value: 10, validator: mockValidator });
    expect(result).toBe(true);
  });

  it('should return false when validator is a function and returns false', () => {
    const mockValidator: NumericInputValidator = (input?: number) => input === 10;
    const result = validateNumericInputValue({ value: 5, validator: mockValidator });
    expect(result).toBe(false);
  });

  it('should return true when value is within the specified min and max range', () => {
    const result = validateNumericInputValue({ value: 50, minValue: 10, maxValue: 100 });
    expect(result).toBe(true);
  });

  it('should return false when value is below the minimum range', () => {
    const result = validateNumericInputValue({ value: 5, minValue: 10, maxValue: 100 });
    expect(result).toBe(false);
  });

  it('should return false when value is above the maximum range', () => {
    const result = validateNumericInputValue({ value: 150, minValue: 10, maxValue: 100 });
    expect(result).toBe(false);
  });

  it('should return true when no validator is provided and value is valid', () => {
    const result = validateNumericInputValue({ value: 50 });
    expect(result).toBe(true);
  });

  it('should return true when value is undefined and required is false, even with no validator', () => {
    const result = validateNumericInputValue({ value: undefined, required: false });
    expect(result).toBe(true);
  });
});
