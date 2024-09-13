import { describe, expect, it } from 'vitest';

import { getTextInputInitialValue } from '../helpers';

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
