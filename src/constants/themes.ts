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

export const LIGHT_THEME: ChopLogicTheme = {
  // Colors
  primaryColor: 'hsl(205, 100%, 9%)',
  secondaryColor: 'hsl(202, 40%, 27%)',
  tertiaryColor: 'hsl(217, 16%, 72%)',
  backgroundColor: 'hsl(38, 100%, 91%)',
  accentColor: 'hsl(356, 100%, 53%)',
  // Gradients
  primaryGradient: 'linear-gradient(0deg, #001C2E, #294D60)',
  accentGradient: 'linear-gradient(0deg, #001C2E, #FF101F)',
  tintGradient: 'linear-gradient(0deg, #ACB5C3, #FFEED1)',
  // Shadows
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(0, 0, 0, 0.3)',
  insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
  // Borders
  regularBorder: '1px solid #ACB5C3FF',
  accentBorder: '1px solid #FF0F1FFF',
  outlineBorder: '2px dashed #001B2EFF',
  // Fonts
  coreFontFamily: 'Arial, Helvetica, sans-serif',
  monospaceFontFamily: `'Courier New', Courier, monospace`,
  // Units
  smallGap: '0.25rem',
  mediumGap: '0.6rem',
  bigGap: '1rem',
  iconSize: '1.6rem',
  blockBorderRadius: '0.375rem',
  // Z-indexes
  baseIndex: '1',
  tooltipIndex: '100',
  dropdownIndex: '200',
  modalIndex: '300',
};

export const DARK_THEME: ChopLogicTheme = {
  // Colors
  primaryColor: 'hsl(30, 36%, 90%)',
  secondaryColor: 'hsl(45, 77%, 79%)',
  tertiaryColor: 'hsl(184, 36%, 63%)',
  backgroundColor: 'hsl(345, 6%, 13%)',
  accentColor: 'hsl(9, 59%, 46%)',
  // Gradients
  primaryGradient: 'linear-gradient(0deg, #EFE6DCFF, #266dd3)',
  accentGradient: 'linear-gradient(0deg, #EFE6DCFF, #BB4530FF)',
  tintGradient: 'linear-gradient(0deg, #e9edf0, #f6f7eb)',
  // Shadows
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(0, 0, 0, 0.3)',
  insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
  // Borders
  regularBorder: '1px solid #7FBEC3FF',
  accentBorder: '1px solid #BB4530FF',
  outlineBorder: '2px dashed #EFE6DCFF',
  // Fonts
  coreFontFamily: 'Arial, Helvetica, sans-serif',
  monospaceFontFamily: `'Courier New', Courier, monospace`,
  // Units
  smallGap: '0.25rem',
  mediumGap: '0.6rem',
  bigGap: '1rem',
  iconSize: '1.6rem',
  blockBorderRadius: '0.375rem',
  // Z-indexes
  baseIndex: '1',
  tooltipIndex: '100',
  dropdownIndex: '200',
  modalIndex: '300',
};
