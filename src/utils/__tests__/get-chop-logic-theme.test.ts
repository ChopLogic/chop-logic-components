import { getChopLogicTheme } from '@utils';
import { describe, expect, it } from 'vitest';

import { DARK_THEME, LIGHT_THEME } from '@css';

describe('getChopLogicTheme', () => {
  it('should return the dark theme when "dark" is passed as the theme', () => {
    const result = getChopLogicTheme('dark');
    expect(result).toEqual(DARK_THEME);
  });

  it('should return the light theme when "light" is passed as the theme', () => {
    const result = getChopLogicTheme('light');
    expect(result).toEqual(LIGHT_THEME);
  });

  it('should return the light theme when no theme is passed', () => {
    const result = getChopLogicTheme();
    expect(result).toEqual(LIGHT_THEME);
  });

  it('should override default theme properties with custom values', () => {
    const customValues = {
      fontColorBase: '#ff0000',
      fontColorAccent: '#00ff00',
    };

    const result = getChopLogicTheme('light', customValues);

    expect(result.fontColorBase).toBe('#ff0000');
    expect(result.fontColorAccent).toBe('#00ff00');
    expect(result.backgroundColorBase).toBe(LIGHT_THEME.backgroundColorBase); // Unchanged property
  });

  it('should only override properties that exist in the theme', () => {
    const customValues = {
      fontColorBase: '#ff0000',
      nonExistentProperty: 'some value',
    };

    const result = getChopLogicTheme('dark', customValues);

    expect(result.fontColorBase).toBe('#ff0000');
    expect(result).not.toHaveProperty('nonExistentProperty'); // Property shouldn't exist
  });

  it('should convert overridden properties to strings', () => {
    const customValues = {
      fontColorBase: 12345, // Numeric value
    };

    const result = getChopLogicTheme('light', customValues as never);

    expect(result.fontColorBase).toBe('12345'); // Converted to string
  });

  it('should work correctly when custom values are undefined', () => {
    const result = getChopLogicTheme('dark', undefined);

    expect(result).toEqual(DARK_THEME);
  });
});
