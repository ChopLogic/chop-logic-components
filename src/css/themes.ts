import { ChopLogicTheme } from '@/types';

export const LIGHT_THEME: ChopLogicTheme = {
  // Colors
  fontColorBase: 'black',
  fontColorLight: 'silver',
  fontColorAccent: 'red',
  backgroundColorBase: 'white',
  backgroundColorLight: 'whitesmoke',
  backgroundColorAccent: 'pink',
  backgroundColorTransparent: 'hsla(0, 0%, 0%, 0.3)',
  // Gradients
  gradientShadow: 'linear-gradient(to left, hsl(209, 59%, 14%) 0%, hsl(209, 59%, 24%) 8%, hsl(209, 59%, 24%) 92%, hsl(209, 59%, 14%) 100%)',
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
  borderBase: `1px solid black`,
  borderLight: `1px solid black`,
  borderAccent: `1px solid black`,
  borderOutline: `1px solid black`,
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
