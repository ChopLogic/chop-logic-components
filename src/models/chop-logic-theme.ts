import { ChopLogicThemeMode } from '@enums';

export interface ChopLogicTheme {
  // Colors
  fontColorBase: string;
  fontColorLight: string;
  fontColorAccent: string;
  backgroundColorBase: string;
  backgroundColorLight: string;
  backgroundColorTransparent: string;
  // Gradients
  gradientShadow: string;
  // Fonts
  fontFamilyCore: string;
  fontFamilyMonospace: string;
  fontSizeBase: string;
  fontSizeSmall: string;
  fontSizeHeader: string;
  // Units
  gapSmall: string;
  gapMedium: string;
  gapBig: string;
  iconSize: string;
  blockBorderRadius: string;
  // Shadows
  boxShadow: string;
  textShadow: string;
  // Borders
  borderBase: string;
  borderLight: string;
  borderAccent: string;
  borderOutline: string;
  // Z-indexes
  zIndexBase: string;
  zIndexPopup: string;
  zIndexModal: string;
}

export interface ChopLogicThemeContextProps {
  mode: ChopLogicThemeMode;
  setMode?: (mode: ChopLogicThemeMode) => void;
  customTheme?: Partial<ChopLogicTheme>;
  setCustomTheme?: (customTheme: ChopLogicTheme) => void;
}
