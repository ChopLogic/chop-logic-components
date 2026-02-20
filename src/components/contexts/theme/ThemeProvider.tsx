import '@styles/main.css';
import '@styles/icons.css';

import { type FC, type ReactNode, useEffect, useMemo, useState } from 'react';

import { CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS, ThemeContext } from './ThemeContext';

type ThemeMode = typeof CL_LIGHT_THEME_CLASS | typeof CL_DARK_THEME_CLASS;

export const ThemeProvider: FC<{ children: ReactNode; injectedMode?: ThemeMode }> = ({
  children,
  injectedMode,
}) => {
  const [mode, setMode] = useState<ThemeMode>(CL_LIGHT_THEME_CLASS);

  useEffect(() => {
    if (mode && typeof mode === 'string') {
      document.body.classList.remove(CL_LIGHT_THEME_CLASS, CL_DARK_THEME_CLASS);
      document.body.classList.add(mode);
    }
  }, [mode]);

  useEffect(() => {
    if (injectedMode && typeof injectedMode === 'string') {
      document.body.classList.remove(CL_LIGHT_THEME_CLASS, CL_DARK_THEME_CLASS);
      document.body.classList.add(injectedMode);
    }
  }, [injectedMode]);

  const providerValue = useMemo(() => ({ mode, setMode }), [mode]);

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};
