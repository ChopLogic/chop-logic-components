import { ThemeMode } from '@enums';
import { ThemeContextProps } from '@models';
import { createContext } from 'react';

export const ThemeContext = createContext<ThemeContextProps>({
  mode: ThemeMode.Light,
  setMode: () => {},
});
