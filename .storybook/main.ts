import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/__docs__/*.stories.tsx', '../src/**/__docs__/*.mdx'],

  staticDirs: ['../public'], //👈 Configures the static asset folder in Storybook

  addons: ['@storybook/addon-essentials', '@storybook/addon-mdx-gfm'],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
