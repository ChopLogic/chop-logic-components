import { FC, ReactNode, useEffect, useState } from 'react';
import { ChopLogicThemeContext } from './context.ts';
import { ChopLogicThemeMode } from '@enums';
import '@styles/root.scss';

export const ChopLogicThemeProvider: FC<{ children: ReactNode; injectedMode?: ChopLogicThemeMode }> = ({ children, injectedMode }) => {
  const [mode, setMode] = useState(ChopLogicThemeMode.Light);

  useEffect(() => {
    if (mode && typeof mode === 'string') {
      document.body.classList.remove(ChopLogicThemeMode.Light, ChopLogicThemeMode.Dark);
      document.body.classList.add(mode);
    }
  }, [mode]);

  useEffect(() => {
    if (injectedMode && typeof injectedMode === 'string') {
      document.body.classList.remove(ChopLogicThemeMode.Light, ChopLogicThemeMode.Dark);
      document.body.classList.add(injectedMode);
    }
  }, [injectedMode]);

  return <ChopLogicThemeContext.Provider value={{ mode, setMode }}>{children}</ChopLogicThemeContext.Provider>;
};
