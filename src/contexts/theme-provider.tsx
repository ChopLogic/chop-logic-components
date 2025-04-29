import { FC, ReactNode, useEffect, useState } from 'react';
import { CLThemeContext, ThemeMode } from '@contexts/theme.ts';

export const CLThemeProvider: FC<{ children: ReactNode; inferredMode?: ThemeMode }> = ({ children, inferredMode }) => {
  const [mode, setMode] = useState(ThemeMode.Light);

  useEffect(() => {
    console.log('EFFECT', mode);
    if (mode && typeof mode === 'string') {
      document.body.classList.remove(ThemeMode.Light, ThemeMode.Dark);
      document.body.classList.add(mode);
    }
  }, [mode]);

  useEffect(() => {
    if (inferredMode && typeof inferredMode === 'string') {
      document.body.classList.remove(ThemeMode.Light, ThemeMode.Dark);
      document.body.classList.add(inferredMode);
    }
  }, [inferredMode]);

  return <CLThemeContext.Provider value={{ mode, setMode }}>{children}</CLThemeContext.Provider>;
};
