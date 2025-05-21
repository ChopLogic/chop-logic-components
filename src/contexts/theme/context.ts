import { createContext } from 'react';
import { ChopLogicThemeMode } from '@enums';

export interface ChopLogicThemeContextProps {
  mode?: ChopLogicThemeMode;
  setMode: (mode: ChopLogicThemeMode) => void;
}

export const ChopLogicThemeContext = createContext<ChopLogicThemeContextProps>({
  mode: ChopLogicThemeMode.Light,
  setMode: () => {},
});
