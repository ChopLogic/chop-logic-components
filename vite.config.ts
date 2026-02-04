/// <reference types="vitest" />
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import { coverageConfigDefaults } from 'vitest/config';

import { peerDependencies } from './package.json';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
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
    minify: 'esbuild', // Minify the output
    target: 'es2015', // Enable better tree shaking
    cssCodeSplit: true, // Enable CSS code splitting
    cssMinify: true, // Minify CSS
    emptyOutDir: false,
  },
  plugins: [
    // dts({
    //   exclude: ['**/__tests__/**', '**/__docs__/**', '**/stories/**', '**/*.test.*', '**/*.spec.*'],
    //   insertTypesEntry: true,
    //   rollupTypes: true, // Bundles all declarations into one file
    // }),
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
