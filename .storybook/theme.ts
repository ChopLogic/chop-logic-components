import type { ThemeVars } from 'storybook/theming';
import { create } from 'storybook/theming/create';

export const chopLogicTheme: ThemeVars = create({
  base: 'light',
  brandTarget: '_self',
  brandTitle: 'Chop Logic Components',
  brandImage: 'logo.png',
  brandUrl: 'https://github.com/ChopLogic',
});
