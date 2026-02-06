/// <reference types="vitest" />
import * as path from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
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
      external: Object.keys(peerDependencies),
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
    copyPublicDir: false,
    sourcemap: true,
    emptyOutDir: true,
    minify: 'esbuild', // Minify the output
    target: 'es2015', // Enable better tree shaking
    cssCodeSplit: true, // Enable CSS code splitting
    cssMinify: true, // Minify CSS
  },
  plugins: [
    dts({
      exclude: ['**/__tests__/**', '**/__docs__/**', '**/stories/**', '**/*.test.*', '**/*.spec.*'],
      insertTypesEntry: true,
      rollupTypes: true, // Bundles all declarations into one file
    }),
    libInjectCss(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@enums', replacement: path.resolve(__dirname, 'src/enums') },
      { find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
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
      reporter: ['text', 'lcov', 'clover'],
    },
  },
});
