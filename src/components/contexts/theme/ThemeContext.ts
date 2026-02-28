import { createContext } from 'react';

export const CL_LIGHT_THEME_CLASS = 'cl-components-light-theme';
export const CL_DARK_THEME_CLASS = 'cl-components-dark-theme';

type ThemeMode = typeof CL_LIGHT_THEME_CLASS | typeof CL_DARK_THEME_CLASS;

export const ThemeContext = createContext<{
  mode?: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}>({
  mode: CL_LIGHT_THEME_CLASS,
  setMode: () => {},
});
