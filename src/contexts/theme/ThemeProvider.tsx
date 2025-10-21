import '@styles/root.scss';

import { ThemeMode } from '@enums';
import { type FC, type ReactNode, useEffect, useMemo, useState } from 'react';

import { ThemeContext } from './ThemeContext';

export const ThemeProvider: FC<{ children: ReactNode; injectedMode?: ThemeMode }> = ({
  children,
  injectedMode,
}) => {
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

  const providerValue = useMemo(() => ({ mode, setMode }), [mode]);

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
};
