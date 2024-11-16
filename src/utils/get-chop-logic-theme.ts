import { DARK_THEME, LIGHT_THEME } from 'constants/themes.ts';
import { ChopLogicTheme } from 'utils/types.ts';

export function getChopLogicTheme(theme?: 'dark' | 'light', customThemeValues?: Partial<ChopLogicTheme>): ChopLogicTheme {
  const defaultTheme: ChopLogicTheme = theme === 'dark' ? DARK_THEME : LIGHT_THEME;

  if (customThemeValues) {
    for (const key in customThemeValues) {
      const themeProperty = key as keyof ChopLogicTheme;
      if (Object.prototype.hasOwnProperty.call(defaultTheme, themeProperty)) {
        defaultTheme[themeProperty] = (customThemeValues[themeProperty] as string).toString();
      }
    }
  }

  return defaultTheme;
}
