import { ThemeMode } from '@enums';
import type { ThemeContextProps } from '@types';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextProps>({
  mode: ThemeMode.Light,
  setMode: () => {},
});
