import { default as React } from '../../node_modules/react';
import { ChopLogicTheme } from '../types';

type ChopLogicThemeContextProps = {
    mode: 'light' | 'dark';
    setMode?: (mode: 'light' | 'dark') => void;
    customTheme?: Partial<ChopLogicTheme>;
    setCustomTheme?: (customTheme: ChopLogicTheme) => void;
};
export declare const ChopLogicThemeContext: React.Context<ChopLogicThemeContextProps>;
export {};
