import React from 'react';

import { ChopLogicTheme } from '@/types';

type ChopLogicThemeContextProps = {
  mode: 'light' | 'dark';
  setMode?: (mode: 'light' | 'dark') => void;
  customTheme?: Partial<ChopLogicTheme>;
  setCustomTheme?: (customTheme: ChopLogicTheme) => void;
};

export const ChopLogicThemeContext = React.createContext<ChopLogicThemeContextProps>({
  mode: 'light',
});
