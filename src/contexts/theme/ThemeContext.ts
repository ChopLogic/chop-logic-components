import { ThemeMode } from '@enums';
import { createContext } from 'react';

export interface ThemeContextProps {
  mode?: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  mode: ThemeMode.Light,
  setMode: () => {},
});
