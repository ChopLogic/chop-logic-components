import { ChopLogicThemeMode } from '../../enums';
export interface ChopLogicThemeContextProps {
    mode?: ChopLogicThemeMode;
    setMode: (mode: ChopLogicThemeMode) => void;
}
export declare const ChopLogicThemeContext: import('../../../node_modules/react').Context<ChopLogicThemeContextProps>;
