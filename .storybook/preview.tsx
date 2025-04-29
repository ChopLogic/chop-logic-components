import type { Preview } from '@storybook/react';
import { Decorator } from '@storybook/react';
import { ChopLogicThemeContext, ChopLogicThemeMode } from '../src';
import { DARK_THEME, LIGHT_THEME } from '../src/css';
import { STORY_WRAPPER_STYLES } from '@css/__docs__/story-wrapper-styles';
import { ThemeMode } from '../src/contexts/theme';
import { CLThemeProvider } from '../src/contexts/theme-provider';
import { useMemo } from 'react';

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
  const { backgrounds } = context.globals;
  const backgroundColor = backgrounds?.value ?? LIGHT_THEME.backgroundColorBase;
  const mode = backgroundColor === DARK_THEME.backgroundColorBase ? ChopLogicThemeMode.Dark : ChopLogicThemeMode.Light;
  const inferredMode = useMemo(() => {
    return backgroundColor === DARK_THEME.backgroundColorBase ? ThemeMode.Dark : ThemeMode.Light; // Or match your theme colors
  }, [backgroundColor]);

  return (
    <ChopLogicThemeContext.Provider value={{ mode }}>
      <CLThemeProvider inferredMode={inferredMode}>
        <div style={{ ...STORY_WRAPPER_STYLES, backgroundColor }}>
          <StoryFn />
        </div>
      </CLThemeProvider>
    </ChopLogicThemeContext.Provider>
  );
};

export const decorators = [withTheme];

export default preview;
