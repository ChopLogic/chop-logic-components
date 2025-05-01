import { FC, ReactNode, useEffect, useState } from 'react';
import { CLThemeContext, ThemeMode } from '@contexts/theme.ts';
import '@styles/root.scss';

export const CLThemeProvider: FC<{ children: ReactNode; storybookMode?: ThemeMode }> = ({ children, storybookMode }) => {
  const [mode, setMode] = useState(ThemeMode.Light);

  useEffect(() => {
    console.log('EFFECT', mode);
    if (mode && typeof mode === 'string') {
      document.body.classList.remove(ThemeMode.Light, ThemeMode.Dark);
      document.body.classList.add(mode);
    }
  }, [mode]);

  useEffect(() => {
    if (storybookMode && typeof storybookMode === 'string') {
      document.body.classList.remove(ThemeMode.Light, ThemeMode.Dark);
      document.body.classList.add(storybookMode);
    }
  }, [storybookMode]);

  return <CLThemeContext.Provider value={{ mode, setMode }}>{children}</CLThemeContext.Provider>;
};
