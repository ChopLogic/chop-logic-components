import { createContext } from 'react';

export enum ThemeMode {
  Light = 'cl-components-light-theme',
  Dark = 'cl-components-dark-theme',
}

export interface CLThemeContextProps {
  mode?: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const CLThemeContext = createContext<CLThemeContextProps>({
  mode: ThemeMode.Light,
  setMode: () => {},
});
