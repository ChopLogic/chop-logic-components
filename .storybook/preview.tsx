import type { Preview } from '@storybook/react';
import { Decorator } from '@storybook/react';
import { ThemeMode } from '../src/contexts/theme';
import { CLThemeProvider } from '../src/contexts/theme-provider';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'Dark', value: '#2B2B2BFF' },
        { name: 'Light', value: '#FFFFFFFF' },
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
  const backgroundColor = backgrounds?.value ?? '#FFFFFFFF';
  const storybookMode = backgroundColor === '#2B2B2BFF' ? ThemeMode.Dark : ThemeMode.Light;

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
