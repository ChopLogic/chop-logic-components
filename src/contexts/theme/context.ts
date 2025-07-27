import { ChopLogicThemeMode } from '@enums';
import { createContext } from 'react';

export interface ChopLogicThemeContextProps {
  mode?: ChopLogicThemeMode;
  setMode: (mode: ChopLogicThemeMode) => void;
}

export const ChopLogicThemeContext = createContext<ChopLogicThemeContextProps>({
  mode: ChopLogicThemeMode.Light,
  setMode: () => {},
});
