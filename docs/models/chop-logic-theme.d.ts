import { ChopLogicThemeMode } from '../enums';
export interface ChopLogicTheme {
    fontColorBase: string;
    fontColorLight: string;
    fontColorAccent: string;
    backgroundColorBase: string;
    backgroundColorLight: string;
    backgroundColorTransparent: string;
    gradientShadow: string;
    fontFamilyCore: string;
    fontFamilyMonospace: string;
    fontSizeBase: string;
    fontSizeSmall: string;
    fontSizeHeader: string;
    gapSmall: string;
    gapMedium: string;
    gapBig: string;
    iconSize: string;
    blockBorderRadius: string;
    boxShadow: string;
    textShadow: string;
    borderBase: string;
    borderLight: string;
    borderAccent: string;
    borderOutline: string;
    zIndexBase: string;
    zIndexPopup: string;
    zIndexModal: string;
}
export interface ChopLogicThemeContextProps {
    mode: ChopLogicThemeMode;
    setMode?: (mode: ChopLogicThemeMode) => void;
    customTheme?: Partial<ChopLogicTheme>;
    setCustomTheme?: (customTheme: Partial<ChopLogicTheme>) => void;
}
