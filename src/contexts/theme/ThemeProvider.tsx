import '@styles/root.scss';

import { ThemeMode } from '@enums';
import { FC, ReactNode, useEffect, useState } from 'react';

import { ChopLogicThemeContext } from './ThemeContext.ts';

export const ChopLogicThemeProvider: FC<{ children: ReactNode; injectedMode?: ThemeMode }> = ({ children, injectedMode }) => {
  const [mode, setMode] = useState(ThemeMode.Light);

  useEffect(() => {
    if (mode && typeof mode === 'string') {
      document.body.classList.remove(ThemeMode.Light, ThemeMode.Dark);
      document.body.classList.add(mode);
    }
  }, [mode]);

  useEffect(() => {
    if (injectedMode && typeof injectedMode === 'string') {
      document.body.classList.remove(ThemeMode.Light, ThemeMode.Dark);
      document.body.classList.add(injectedMode);
    }
  }, [injectedMode]);

  return <ChopLogicThemeContext.Provider value={{ mode, setMode }}>{children}</ChopLogicThemeContext.Provider>;
};
