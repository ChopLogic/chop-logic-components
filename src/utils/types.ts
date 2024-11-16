import { CSSProperties } from 'react';

export type CommonInputProps = CommonComponentProps & {
  label: string;
  name: string;
  disabled?: boolean;
  required?: boolean;
};

export type CommonComponentProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
  tabIndex?: number;
  title?: string;
  theme?: 'dark' | 'light';
};

export type SelectValue = {
  id: string;
  label: string;
} & { [key in string]: unknown };

export interface ChopLogicTheme {
  // Colors
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  backgroundColor: string;
  accentColor: string;
  // Gradients
  primaryGradient: string;
  accentGradient: string;
  tintGradient: string;
  // Fonts
  coreFontFamily: string;
  monospaceFontFamily: string;
  // Units
  smallGap: string;
  mediumGap: string;
  bigGap: string;
  iconSize: string;
  blockBorderRadius: string;
  // Shadows
  boxShadow: string;
  textShadow: string;
  insetShadow: string;
  // Borders
  regularBorder: string;
  accentBorder: string;
  outlineBorder: string;
  // Z-indexes
  baseIndex: string;
  tooltipIndex: string;
  dropdownIndex: string;
  modalIndex: string;
}
