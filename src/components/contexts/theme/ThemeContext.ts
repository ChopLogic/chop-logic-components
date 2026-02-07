import { ThemeMode } from '@enums';
import { createContext } from 'react';

export const ThemeContext = createContext<{
  mode?: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}>({
  mode: ThemeMode.Light,
  setMode: () => {},
});
