import type { ChopLogicRegExpWithFlags, TextInputValidator } from '@types';
import { describe, expect, it } from 'vitest';

import { getTextInputInitialValue, validateTextInputValue } from '../TextInput.helpers';

describe('getTextInputInitialValue', () => {
  it('should return the value from initialValues if it exists', () => {
    const result = getTextInputInitialValue({
      name: 'username',
      initialValues: { username: 'JohnDoe' },
      defaultValue: 'Guest',
    });
    expect(result).toBe('JohnDoe');
  });

  it('should return the defaultValue if initialValues does not exist', () => {
    const result = getTextInputInitialValue({
      name: 'username',
      initialValues: {},
      defaultValue: 'Guest',
    });
    expect(result).toBe('Guest');
  });

  it('should return an empty string if neither initialValues nor defaultValue exist', () => {
    const result = getTextInputInitialValue({
      name: 'username',
      initialValues: {},
    });
    expect(result).toBe('');
  });

  it('should return the string representation of the initialValues value', () => {
    const result = getTextInputInitialValue({
      name: 'username',
      initialValues: { username: 123 },
    });
    expect(result).toBe('123');
  });

  it('should return an empty string if defaultValue is not a string', () => {
    const result = getTextInputInitialValue({
      name: 'username',
      initialValues: {},
      defaultValue: 456,
    });
    expect(result).toBe('');
  });
});

describe('validateTextInputValue', () => {
  it('should return false when value is required but empty', () => {
    const result = validateTextInputValue({ value: '', required: true });
    expect(result).toBe(false);
  });

  it('should return true when value is not required and empty', () => {
    const result = validateTextInputValue({ value: '', required: false });
    expect(result).toBe(true);
  });

  it('should return true when value is provided and required is true', () => {
    const result = validateTextInputValue({ value: 'hello', required: true });
    expect(result).toBe(true);
  });

  it('should return true when validator is a function and it returns true', () => {
    const mockValidator: TextInputValidator = (input: string) => input === 'valid';
    const result = validateTextInputValue({
      value: 'valid',
      required: true,
      validator: mockValidator,
    });
    expect(result).toBe(true);
  });

  it('should return false when validator is a function and it returns false', () => {
    const mockValidator: TextInputValidator = (input: string) => input === 'valid';
    const result = validateTextInputValue({
      value: 'invalid',
      required: true,
      validator: mockValidator,
    });
    expect(result).toBe(false);
  });

  it('should return true when validator is a regular expression and value matches', () => {
    const regexpValidator: ChopLogicRegExpWithFlags = { regexp: '^\\d{3}$' }; // Should match exactly three digits
    const result = validateTextInputValue({
      value: '123',
      required: true,
      validator: regexpValidator,
    });
    expect(result).toBe(true);
  });

  it('should return false when validator is a regular expression and value does not match', () => {
    const regexpValidator: ChopLogicRegExpWithFlags = { regexp: '^\\d{3}$' }; // Should match exactly three digits
    const result = validateTextInputValue({
      value: '12',
      required: true,
      validator: regexpValidator,
    });
    expect(result).toBe(false);
  });

  it('should return true when validator is a regular expression with flags and value matches', () => {
    const regexpValidator: ChopLogicRegExpWithFlags = { regexp: '^abc$', flags: 'i' }; // Should match "abc" case-insensitive
    const result = validateTextInputValue({
      value: 'ABC',
      required: true,
      validator: regexpValidator,
    });
    expect(result).toBe(true);
  });

  it('should return true when no validator is provided and value is not empty', () => {
    const result = validateTextInputValue({ value: 'some value', required: false });
    expect(result).toBe(true);
  });
});
