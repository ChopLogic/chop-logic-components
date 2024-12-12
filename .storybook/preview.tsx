import type { Preview } from '@storybook/react';
import { Decorator } from '@storybook/react';
import { ChopLogicThemeContext } from '../src';
import { DARK_THEME, LIGHT_THEME } from '../src/css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      icon: 'circlehollow',
      values: [
        { name: 'Dark', value: `${DARK_THEME.backgroundColor}` },
        { name: 'Light', value: `${LIGHT_THEME.backgroundColor}` },
      ],
      default: 'Light',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Inputs',
          ['Button', 'TextInput', 'NumericInput', 'Checkbox', 'Select', 'MultiSelect', '*'],
          'Containers',
          'Modals',
          'Hooks',
          '*',
        ],
      },
    },
  },

  tags: ['autodocs'],
};

const withTheme: Decorator = (StoryFn, context) => {
  // Get the active theme value from the story parameter
  const { backgrounds } = context.globals;
  const mode = backgrounds?.value === DARK_THEME.backgroundColor ? 'dark' : 'light';
  return (
    <ChopLogicThemeContext.Provider value={{ mode }}>
      <StoryFn />
    </ChopLogicThemeContext.Provider>
  );
};

export const decorators = [withTheme];

export default preview;
