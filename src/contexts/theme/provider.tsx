import { FC, ReactNode, useEffect, useState } from 'react';
import { ChopLogicThemeContext } from './context.ts';
import { ChopLogicThemeMode } from '@enums';
import '@styles/root.scss';

export const ChopLogicThemeProvider: FC<{ children: ReactNode; storybookMode?: ChopLogicThemeMode }> = ({ children, storybookMode }) => {
  const [mode, setMode] = useState(ChopLogicThemeMode.Light);

  useEffect(() => {
    if (mode && typeof mode === 'string') {
      document.body.classList.remove(ChopLogicThemeMode.Light, ChopLogicThemeMode.Dark);
      document.body.classList.add(mode);
    }
  }, [mode]);

  useEffect(() => {
    if (storybookMode && typeof storybookMode === 'string') {
      document.body.classList.remove(ChopLogicThemeMode.Light, ChopLogicThemeMode.Dark);
      document.body.classList.add(storybookMode);
    }
  }, [storybookMode]);

  return <ChopLogicThemeContext.Provider value={{ mode, setMode }}>{children}</ChopLogicThemeContext.Provider>;
};
