import { ThemeMode } from '@enums';
import { createContext } from 'react';

export interface ChopLogicThemeContextProps {
  mode?: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const ChopLogicThemeContext = createContext<ChopLogicThemeContextProps>({
  mode: ThemeMode.Light,
  setMode: () => {},
});
