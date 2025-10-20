import { create } from 'storybook/theming/create';
import { ThemeVars } from 'storybook/theming';

export const chopLogicTheme: ThemeVars = create({
  base: 'light',
  brandTarget: '_self',
  brandTitle: `<img src="/logo.png" width="207px" height="107px"/>`,
  brandUrl: 'https://github.com/ChopLogic',
});
