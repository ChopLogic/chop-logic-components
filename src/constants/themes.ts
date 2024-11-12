export interface ChopLogicTheme {
  // Colors
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  backgroundColor: string;
  highlightColor: string;
  shadeColor: string;
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
  minElementSize: string;
  smallIconSize: string;
  blockBorderRadius: string;
  fieldWrapperHeight: string;
  // Shadows
  boxShadow: string;
  textShadow: string;
  insetShadow: string;
  // Borders
  thinBorder: string;
  thick: string;
  accent: string;
  outline: string;
  // Z-indexes
  dropdownIndex: number;
  modalIndex: number;
  tooltipIndex: number;
}

export const LIGHT_THEME: Partial<ChopLogicTheme> = {
  // Colors
  primaryColor: 'hsl(0, 0%, 13%)',
  secondaryColor: 'hsl(215, 69%, 49%)',
  tertiaryColor: 'hsl(205, 48%, 56%)',
  backgroundColor: 'hsl(0, 0%, 100%)',
  highlightColor: 'hsl(65, 43%, 95%)',
  shadeColor: 'hsl(206, 19%, 93%)',
  accentColor: 'hsl(16, 100%, 45%)',
  // Gradients
  primaryGradient: 'linear-gradient(0deg, #222222, #266dd3)',
  accentGradient: 'linear-gradient(0deg, #222222, #e53d00)',
  tintGradient: 'linear-gradient(0deg, #e9edf0, #f6f7eb)',
  // Shadows
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(0, 0, 0, 0.3)',
  insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
  // Borders
  thinBorder: '1px solid #5998c5',
  thick: '1px solid #266dd3',
  accent: '1px solid #e53d00',
  outline: '2px dashed #e53d00',
};

export const DARK_THEME: Partial<ChopLogicTheme> = {
  // Colors
  primaryColor: 'hsl(0, 0%, 13%)',
  secondaryColor: 'hsl(215, 69%, 49%)',
  tertiaryColor: 'hsl(205, 48%, 56%)',
  backgroundColor: 'hsl(0, 0%, 100%)',
  highlightColor: 'hsl(65, 43%, 95%)',
  shadeColor: 'hsl(206, 19%, 93%)',
  accentColor: 'hsl(16, 100%, 45%)',
  // Gradients
  primaryGradient: 'linear-gradient(0deg, #222222, #266dd3)',
  accentGradient: 'linear-gradient(0deg, #222222, #e53d00)',
  tintGradient: 'linear-gradient(0deg, #e9edf0, #f6f7eb)',
  // Shadows
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(0, 0, 0, 0.3)',
  insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
  // Borders
  thinBorder: '1px solid #5998c5',
  thick: '1px solid #266dd3',
  accent: '1px solid #e53d00',
  outline: '2px dashed #e53d00',
};

export const COMMON_THEME_VALUES: Partial<ChopLogicTheme> = {
  // Fonts
  coreFontFamily: 'Arial, Helvetica, sans-serif',
  monospaceFontFamily: `'Courier New', Courier, monospace`,
  // Units
  smallGap: '0.25rem',
  mediumGap: '0.6rem',
  bigGap: '1rem',
  minElementSize: '2.75rem',
  smallIconSize: '1.6rem',
  blockBorderRadius: '0.375rem',
  fieldWrapperHeight: '2.125rem',
  // Z-indexes
  dropdownIndex: 1000,
  modalIndex: 1000,
  tooltipIndex: 1000,
};
