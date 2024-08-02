export const COLORS = Object.freeze({
  primary: 'hsl(0, 0%, 13%)', // black
  background: 'hsl(65, 43%, 95%)', // ivory
  shade: 'hsl(206, 19%, 93%)', // tint
  secondary: 'hsl(215, 69%, 49%)', // celticBlue
  tertiary: 'hsl(205, 48%, 56%)', // celestialBlue
  accent: 'hsl(16, 100%, 45%)', // syracuseRed
});

export const FONTS = Object.freeze({
  core: `Arial, Helvetica, sans-serif`,
  monospace: `'Courier New', Courier, monospace`,
});

export const UNITS = Object.freeze({
  smallGap: '0.25rem',
  mediumGap: '0.6rem',
  bigGap: '1rem',
  minElementSize: '2.75rem',
  blockBorderRadius: '0.375rem',
});

export const SHADOWS = Object.freeze({
  box: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
  text: '2.4px 2.4px 3.2px rgba(0, 0, 0, 0.3)',
  inset: '-5px 5px 20px 5px rgba(0, 0, 0, 0.1) inset',
});

export const BORDERS = Object.freeze({
  lightBlue: '1px solid #5998c5',
  darkBlue: '1px solid #266dd3',
  accent: '1px solid #e53d00',
  focusOutline: '2px dashed #e53d00',
});

export const Z_INDEXES = Object.freeze({
  dropdown: 1000,
  modal: 2000,
  tooltip: 3000,
});
