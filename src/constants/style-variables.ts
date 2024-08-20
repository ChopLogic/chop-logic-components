export const COLORS = Object.freeze({
  primary: 'hsl(0, 0%, 13%)', // black
  background: 'hsl(0, 0%, 100%)', // white
  highlight: 'hsl(65, 43%, 95%)', // ivory
  shade: 'hsl(206, 19%, 93%)', // tint
  secondary: 'hsl(215, 69%, 49%)', // celticBlue
  tertiary: 'hsl(205, 48%, 56%)', // celestialBlue
  accent: 'hsl(16, 100%, 45%)', // syracuseRed
  transparentBackground: 'hsla(0, 0%, 0%, 0.3)', // gray transparent background
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
  inputWrapperHeight: '3rem',
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

export const GRADIENTS = Object.freeze({
  primary: `linear-gradient(0deg, #222222, #266dd3)`,
  accent: `linear-gradient(0deg, #222222, #e53d00)`,
  tint: `linear-gradient(0deg, #e9edf0, #f6f7eb)`,
});

/* Breakpoints for common device groups */
export const SCREEN_BREAKPOINTS = Object.freeze({
  /* Extra small devices (phones, 600px and down) */
  /* @media only screen and (max-width: 600px) {...} */
  phones: 'only screen and (max-width: 600px)',
  /* Small devices (portrait tablets and large phones, 600px and up) */
  /* @media only screen and (min-width: 600px) {...} */
  portraitTablets: 'only screen and (min-width: 600px)',
  /* Medium devices (landscape tablets, 768px and up) */
  /* @media only screen and (min-width: 768px) {...} */
  landscapeTablets: 'only screen and (min-width: 768px)',
  /* Large devices (laptops/desktops, 992px and up) */
  /* @media only screen and (min-width: 992px) {...} */
  laptops: 'only screen and (min-width: 992px)',
  /* Extra large devices (large laptops and desktops, 1200px and up) */
  /* @media only screen and (min-width: 1200px) {...} */
  desktops: 'only screen and (min-width: 1200px)',
});
