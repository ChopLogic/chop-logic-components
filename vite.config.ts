/// <reference types="vitest" />
import * as path from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { coverageConfigDefaults } from 'vitest/config';

import { peerDependencies } from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'chop-logic-components',
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        exports: 'named', // Enable tree shaking
        compact: true, // Minify output
        preserveModules: false, // Preserve module structure for better tree shaking (Set to false for single bundle)
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    minify: 'esbuild', // Minify the output
    target: 'es2015', // Enable better tree shaking
  },
  plugins: [
    dts({
      exclude: ['**/__tests__/**', '**/__docs__/**', '**/stories/**', '**/*.test.*', '**/*.spec.*'],
      insertTypesEntry: true,
      rollupTypes: true, // Bundles all declarations into one file
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@elements', replacement: path.resolve(__dirname, 'src/elements') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@enums', replacement: path.resolve(__dirname, 'src/enums') },
      { find: '@models', replacement: path.resolve(__dirname, 'src/models') },
      { find: '@contexts', replacement: path.resolve(__dirname, 'src/contexts') },
      { find: '@icons', replacement: path.resolve(__dirname, 'src/icons') },
      { find: '@hocs', replacement: path.resolve(__dirname, 'src/hocs') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@atoms', replacement: path.resolve(__dirname, 'src/atoms') },
      { find: '@molecules', replacement: path.resolve(__dirname, 'src/molecules') },
      { find: '@organisms', replacement: path.resolve(__dirname, 'src/organisms') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup-tests.ts',
    coverage: {
      exclude: [
        '**/docs/**',
        'scripts/**',
        '**/__docs__/**',
        '**/models/**',
        '**.config.js',
        '**/storybook-static/**',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
