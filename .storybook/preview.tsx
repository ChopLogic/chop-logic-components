import type { Decorator, Preview } from '@storybook/react-vite';
import {
  CL_DARK_THEME_CLASS,
  CL_LIGHT_THEME_CLASS,
  ThemeProvider,
} from '../src/components/contexts';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#000000' },
        light: { name: 'light', value: '#FFFFFF' },
      },
    },
    initialGlobals: {
      backgrounds: { value: 'light' },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Introduction', 'Atoms', 'Molecules', 'Organisms', 'Hooks', 'Theming', '*'],
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
  fontFamily: 'Helvetica, Arial, sans-serif',
};

const withTheme: Decorator = (StoryFn, context) => {
  const { backgrounds } = context.globals;
  const background = backgrounds?.value ?? 'light';
  const storybookMode = background === 'dark' ? CL_DARK_THEME_CLASS : CL_LIGHT_THEME_CLASS;

  return (
    <ThemeProvider injectedMode={storybookMode}>
      <div style={{ ...STORY_WRAPPER_STYLES }}>
        <StoryFn />
      </div>
    </ThemeProvider>
  );
};

export const decorators = [withTheme];

export default preview;
