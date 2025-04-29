import { useContext } from 'react';
import { ChopLogicThemeContext } from '@contexts';
import { getChopLogicTheme } from '@utils';
import { CLThemeContext } from '@contexts/theme.ts';

export const useChopLogicTheme = () => {
  const { customTheme, mode } = useContext(ChopLogicThemeContext);

  return getChopLogicTheme(mode, customTheme);
};

export const useCLTheme = () => useContext(CLThemeContext);
