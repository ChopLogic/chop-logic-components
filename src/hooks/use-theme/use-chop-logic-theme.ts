import { ThemeContext } from '@components/contexts';
import { useContext } from 'react';

export const useTheme = () => useContext(ThemeContext);
