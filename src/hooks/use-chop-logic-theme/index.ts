import { useContext } from 'react';
import { CLThemeContext } from '@contexts/theme.ts';

export const useCLTheme = () => useContext(CLThemeContext);
