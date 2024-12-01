import { DARK_THEME, LIGHT_THEME } from '@/css';
import { ChopLogicTheme } from '@/types';

export function getChopLogicTheme(mode?: 'dark' | 'light', customTheme?: Partial<ChopLogicTheme>): ChopLogicTheme {
  const defaultTheme: ChopLogicTheme = mode === 'dark' ? DARK_THEME : LIGHT_THEME;

  if (customTheme) {
    for (const key in customTheme) {
      const themeProperty = key as keyof ChopLogicTheme;
      if (Object.prototype.hasOwnProperty.call(defaultTheme, themeProperty)) {
        defaultTheme[themeProperty] = (customTheme[themeProperty] as string).toString();
      }
    }
  }

  return defaultTheme;
}
