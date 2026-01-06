import type { Decorator, Preview } from '@storybook/react-vite';
import { ThemeProvider } from '../src/components/contexts';
import { ThemeMode } from '../src/enums';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        dark: { name: 'dark', value: '#2E1F27' },
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
        order: [
          'Introduction',
          'Theming',
          'Contributing',
          'Changelog',
          'Atoms',
          'Molecules',
          'Organisms',
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
  fontFamily: 'Helvetica, Arial, sans-serif',
};

const withTheme: Decorator = (StoryFn, context) => {
  const { backgrounds } = context.globals;
  const background = backgrounds?.value ?? 'light';
  const storybookMode = background === 'dark' ? ThemeMode.Dark : ThemeMode.Light;

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
