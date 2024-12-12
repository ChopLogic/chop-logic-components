import type { Preview } from '@storybook/react';
import { Decorator } from '@storybook/react';
import { ChopLogicThemeContext } from '../src';
import { DARK_THEME, LIGHT_THEME } from '../src/css';
import { STORY_WRAPPER_STYLES } from '../src/css/story-wrapper-styles';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: `${DARK_THEME.backgroundColorBase}` },
        { name: 'Light', value: `${LIGHT_THEME.backgroundColorBase}` },
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
  const backgroundColorBase = backgrounds?.value ?? LIGHT_THEME.backgroundColorBase;
  const mode = backgroundColorBase === DARK_THEME.backgroundColorBase ? 'dark' : 'light';
  return (
    <ChopLogicThemeContext.Provider value={{ mode }}>
      <div style={{ ...STORY_WRAPPER_STYLES, backgroundColorBase }}>
        <StoryFn />
      </div>
    </ChopLogicThemeContext.Provider>
  );
};

export const decorators = [withTheme];

export default preview;
