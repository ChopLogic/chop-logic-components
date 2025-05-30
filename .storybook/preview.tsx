import type { Preview } from '@storybook/react-vite';
import { Decorator } from '@storybook/react-vite';
import { ChopLogicThemeProvider } from '../src/contexts';
import { ChopLogicThemeMode } from '../src/enums';

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
        order: ['Introduction', 'Theming', 'Contributing', 'Changelog', 'Atoms', 'Containers', 'Modals', 'Hooks', '*'],
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
  const storybookMode = backgroundColor === '#2B2B2BFF' ? ChopLogicThemeMode.Dark : ChopLogicThemeMode.Light;

  return (
    <ChopLogicThemeProvider injectedMode={storybookMode}>
      <div style={{ ...STORY_WRAPPER_STYLES, backgroundColor }}>
        <StoryFn />
      </div>
    </ChopLogicThemeProvider>
  );
};

export const decorators = [withTheme];

export default preview;
