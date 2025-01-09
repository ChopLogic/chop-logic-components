import { useContext } from 'react';
import { ChopLogicThemeContext } from '@contexts';
import { getChopLogicTheme } from '@utils';

export const useChopLogicTheme = () => {
  const { customTheme, mode } = useContext(ChopLogicThemeContext);

  return getChopLogicTheme(mode, customTheme);
};
