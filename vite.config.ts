/// <reference types="vitest" />
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig, type Plugin } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { coverageConfigDefaults } from 'vitest/config';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Custom plugin to exclude __docs__ folders from the build
const excludeDocsPlugin = (): Plugin => ({
  name: 'exclude-docs',
  resolveId(id) {
    if (id.includes('__docs__') || id.includes('__tests__')) {
      return { id, external: true };
    }
    return null;
  },
});

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'chop-logic-components',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        exports: 'named',
        compact: true,
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: (chunkInfo) => {
          // Main entry file gets index.es.js
          if (chunkInfo.name === 'main') {
            return 'index.es.js';
          }
          // Other entry files keep their original structure
          return '[name].js';
        },
        chunkFileNames: '[name].js',
        assetFileNames: '[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    copyPublicDir: false,
    cssCodeSplit: true,
    cssMinify: true,
    emptyOutDir: true,
  },
  plugins: [
    excludeDocsPlugin(),
    dts({
      tsconfigPath: 'tsconfig.build.json',
      insertTypesEntry: true,
      rollupTypes: true,
      exclude: ['**/__docs__/**', '**/__tests__/**'],
    }),
    libInjectCss(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@enums', replacement: resolve(__dirname, 'src/enums') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/hooks') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@types', replacement: resolve(__dirname, 'src/types') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@__docs__', replacement: resolve(__dirname, 'src/__docs__') },
    ],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setup-tests.ts',
    coverage: {
      reporter: ['text', 'lcov', 'clover'],
      exclude: [
        '**/docs/**',
        'scripts/**',
        '**/__docs__/**',
        '**/models/**',
        '**.config.js',
        '**/storybook-static/**',
        ...coverageConfigDefaults.exclude,
      ],
      thresholds: {
        functions: 95, // Requires 95% function coverage
        lines: -10, // Require that no more than 10 lines are uncovered
      },
    },
  },
});
