import { ChopLogicTheme } from '@/types';

export const LIGHT_THEME: ChopLogicTheme = {
  // Colors
  primaryColor: 'hsl(0, 0%, 0%)',
  secondaryColor: 'hsl(209, 59%, 34%)',
  tertiaryColor: 'hsl(191, 95%, 43%)',
  backgroundColor: 'hsl(240, 100%, 100%)',
  accentColor: 'hsl(358, 85%, 52%)',
  transparentBackgroundColor: 'hsla(0, 0%, 0%, 0.3)',
  // Gradients
  primaryGradient:
    'linear-gradient(to left, hsl(209, 59%, 14%) 0%, hsl(209, 59%, 24%) 8%, hsl(209, 59%, 24%) 92%, hsl(209, 59%, 14%) 100%)',
  accentGradient: 'linear-gradient(to left, hsl(12, 83%, 22%) 0%, hsl(12, 83%, 42%) 8%, hsl(12, 83%, 42%) 92%, hsl(12, 83%, 22%) 100%)',
  tintGradient: 'linear-gradient(to left, hsl(195, 53%, 23%) 0%, hsl(195, 53%, 33%) 8%, hsl(195, 53%, 33%) 92%, hsl(195, 53%, 23%) 100%)',
  // Shadows
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(0, 0, 0, 0.3)',
  insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
  // Borders
  regularBorder: '1px solid #24588AFF',
  accentBorder: '1px solid #ED1D23FF',
  outlineBorder: '1px solid #05B0D6FF',
  // Fonts
  coreFontFamily: 'Arial, Helvetica, sans-serif',
  monospaceFontFamily: `'Courier New', Courier, monospace`,
  baseFontSize: '1rem',
  smallFontSize: '0.8rem',
  headerFontSize: '2rem',
  // Units
  smallGap: '0.25rem',
  mediumGap: '0.6rem',
  bigGap: '1rem',
  iconSize: '1rem',
  blockBorderRadius: '0.2rem',
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
  transparentBackgroundColor: 'hsla(45, 77%, 79%, 0.3)',
  // Gradients
  primaryGradient: 'linear-gradient(to left, hsl(45, 77%, 20%) 0%, hsl(45, 77%, 59%) 8%, hsl(45, 77%, 50%) 92%, hsl(45, 77%, 20%) 100%)',
  accentGradient: 'linear-gradient(to left, hsl(9, 59%, 16%) 0%, hsl(9, 59%, 36%) 8%, hsl(9, 59%, 36%) 92%, hsl(9, 59%, 16%) 100%)',
  tintGradient: 'linear-gradient(to left, hsl(184, 36%, 20%) 0%, hsl(184, 36%, 43%) 8%, hsl(184, 36%, 43%) 92%, hsl(184, 36%, 20%) 100%)',
  // Shadows
  boxShadow: 'rgba(239, 230, 220, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(127, 190, 195, 0.3)',
  insetShadow: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
  // Borders
  regularBorder: '1px solid #7FBEC3FF',
  accentBorder: '1px solid #BB4530FF',
  outlineBorder: '1px solid #EFE6DCFF',
  // Fonts
  coreFontFamily: 'Arial, Helvetica, sans-serif',
  monospaceFontFamily: `'Courier New', Courier, monospace`,
  baseFontSize: '1rem',
  smallFontSize: '0.8rem',
  headerFontSize: '2rem',
  // Units
  smallGap: '0.25rem',
  mediumGap: '0.6rem',
  bigGap: '1rem',
  iconSize: '1rem',
  blockBorderRadius: '0.2rem',
  // Z-indexes
  baseIndex: '1',
  tooltipIndex: '100',
  dropdownIndex: '200',
  modalIndex: '300',
};
