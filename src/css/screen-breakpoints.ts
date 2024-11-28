/* Breakpoints for common device groups */
export const SCREEN_BREAKPOINTS = Object.freeze({
  /* Very small devices (phones, 600px and down) */
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
