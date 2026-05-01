import { FC, ReactNode } from '../../../../node_modules/react';
import { CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS } from './ThemeContext';
type ThemeMode = typeof CL_LIGHT_THEME_CLASS | typeof CL_DARK_THEME_CLASS;
export declare const ThemeProvider: FC<{
    children: ReactNode;
    injectedMode?: ThemeMode;
}>;
export {};
