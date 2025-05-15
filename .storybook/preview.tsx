import type { Preview } from '@storybook/react';
import { Decorator } from '@storybook/react';
import { DARK_THEME, LIGHT_THEME } from '../src/css';
import { ThemeMode } from '../src/contexts/theme';
import { CLThemeProvider } from '../src/contexts/theme-provider';

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

const STORY_WRAPPER_STYLES = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  margin: '1rem 0',
};

const withTheme: Decorator = (StoryFn, context) => {
  const { backgrounds } = context.globals;
  const backgroundColor = backgrounds?.value ?? LIGHT_THEME.backgroundColorBase;
  const storybookMode = backgroundColor === DARK_THEME.backgroundColorBase ? ThemeMode.Dark : ThemeMode.Light;

  return (
    <CLThemeProvider storybookMode={storybookMode}>
      <div style={{ ...STORY_WRAPPER_STYLES, backgroundColor }}>
        <StoryFn />
      </div>
    </CLThemeProvider>
  );
};

export const decorators = [withTheme];

export default preview;
