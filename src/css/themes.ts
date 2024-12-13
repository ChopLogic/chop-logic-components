import { ChopLogicTheme } from '@/types';

export const LIGHT_THEME: ChopLogicTheme = {
  // Colors
  fontColorBase: '#3d3d3d',
  fontColorLight: '#9e9e9e',
  fontColorAccent: '#0073e5',
  backgroundColorBase: '#ffffff',
  backgroundColorLight: '#f2f2f2',
  backgroundColorAccent: '#4096ec',
  backgroundColorTransparent: 'hsla(0, 0%, 0%, 0.3)',
  // Gradients
  gradientShadow: 'linear-gradient(to left, hsl(210, 73%, 30%) 0%, hsl(210, 73%, 50%) 8%, hsl(210, 73%, 50%) 92%, hsl(210, 73%, 30%) 100%)',
  // Fonts
  fontFamilyCore: 'Arial, Helvetica, sans-serif',
  fontFamilyMonospace: `'Courier New', Courier, monospace`,
  fontSizeBase: '1.2rem',
  fontSizeSmall: '0.8rem',
  fontSizeHeader: '2rem',
  // Units
  gapSmall: '0.25rem',
  gapMedium: '0.6rem',
  gapBig: '1rem',
  iconSize: '1.2rem',
  blockBorderRadius: '0.25rem',
  // Shadows
  boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(0, 0, 0, 0.3)',
  // Borders
  borderBase: `1px solid #d5d5d5`,
  borderLight: `1px solid #e2e2e2`,
  borderAccent: `1px solid #0073e5`,
  borderOutline: `1px solid #3d3d3d`,
  // Z-indexes
  zIndexBase: '1',
  zIndexPopup: '100',
  zIndexModal: '200',
};

export const DARK_THEME: ChopLogicTheme = {
  // Colors
  fontColorBase: '#ffffff',
  fontColorLight: '#ebebeb',
  fontColorAccent: '#e95420',
  backgroundColorBase: '#2c2c2c',
  backgroundColorLight: '#3d3d3d',
  backgroundColorAccent: '#be4e27',
  backgroundColorTransparent: 'hsla(0, 0%, 0%, 0.3)',
  // Gradients
  gradientShadow: 'linear-gradient(to left, hsl(16, 86%, 26%) 0%, hsl(16, 86%, 30%) 8%, hsl(16, 86%, 30%) 92%, hsl(16, 86%, 26%) 100%)',
  // Fonts
  fontFamilyCore: 'Arial, Helvetica, sans-serif',
  fontFamilyMonospace: `'Courier New', Courier, monospace`,
  fontSizeBase: '1.2rem',
  fontSizeSmall: '0.8rem',
  fontSizeHeader: '2rem',
  // Units
  gapSmall: '0.25rem',
  gapMedium: '0.6rem',
  gapBig: '1rem',
  iconSize: '1.2rem',
  blockBorderRadius: '0.25rem',
  // Shadows
  boxShadow: 'rgba(235, 235, 235, 0.15) 2.4px 2.4px 3.2px',
  textShadow: '2.4px 2.4px 3.2px rgba(190, 78, 39, 0.3)',
  // Borders
  borderBase: `1px solid #1b1b1b`,
  borderLight: `1px solid #4a4a4a`,
  borderAccent: `1px solid #be4e27`,
  borderOutline: `1px solid #ffffff`,
  // Z-indexes
  zIndexBase: '1',
  zIndexPopup: '100',
  zIndexModal: '200',
};
