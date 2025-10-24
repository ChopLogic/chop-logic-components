import type { ThemeVars } from 'storybook/theming';
import { create } from 'storybook/theming/create';

export const chopLogicTheme: ThemeVars = create({
  base: 'light',
  brandTarget: '_self',
  brandTitle: `<img src="/logo.png" width="207px" height="107px"/>`,
  brandUrl: 'https://github.com/ChopLogic',
});
