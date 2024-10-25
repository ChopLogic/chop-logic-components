import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['Intro', 'Inputs', 'Containers', 'Modals', 'Hooks'],
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
