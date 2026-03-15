import type { ThemeVars } from 'storybook/theming';
import { create } from 'storybook/theming/create';

export const chopLogicTheme: ThemeVars = create({
  base: 'light',
  brandTarget: '_self',
  brandTitle: 'Chop Logic Components',
  brandImage: 'logo.png',
  brandUrl: 'https://github.com/ChopLogic',

  // Typography
  fontBase: 'Arial, Helvetica, sans-serif',
  fontCode: '"Courier New", Courier, monospace',

  // Palette
  // colorPrimary
  // colorSecondary

  // UI
  appBg: '#f0f0f0',
  // appContentBg
  // appPreviewBg
  appBorderColor: '#c0b8b6',
  // appBorderRadius

  // // Text
  textColor: '#000000',
  textInverseColor: '#ffffff',

  // Toolbar / bar
  // barTextColor
  // barSelectedColor
  // barHoverColor
  barBg: '#f0f0f0',

  // Form
  // inputBg
  // inputBorder
  // inputTextColor
  // inputBorderRadius

  // Buttons
  // buttonBg
  // buttonBorder
  // booleanBg
  // booleanSelectedBg
});
