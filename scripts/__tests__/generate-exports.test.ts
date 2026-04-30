// @vitest-environment node
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { generateIndexFiles, getAllComponentDirs, toPascalCase } from '../generate-exports';
import { silenceScriptConsoleInTests } from './silence-script-console.js';

silenceScriptConsoleInTests();

describe('toPascalCase', () => {
  it('converts kebab-case to PascalCase', () => {
    expect(toPascalCase('use-debounce')).toBe('UseDebounce');
    expect(toPascalCase('button')).toBe('Button');
  });
});

describe('getAllComponentDirs', () => {
  let tmp: string | undefined;

  afterEach(() => {
    if (tmp) {
      fs.rmSync(tmp, { recursive: true, force: true });
      tmp = undefined;
    }
  });

  it('collects dirs that need a barrel index', () => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-exp-'));
    const components = path.join(tmp, 'components', 'atoms', 'button');
    fs.mkdirSync(components, { recursive: true });
    fs.writeFileSync(path.join(components, 'Button.js'), 'export default {};\n', 'utf8');

    const dirs = getAllComponentDirs(path.join(tmp, 'components'));
    expect(dirs).toHaveLength(1);
    expect(dirs[0]?.componentFile).toBe('Button.js');
    expect(dirs[0]?.componentName).toBe('button');
  });

  it('returns empty when base path is missing', () => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-exp-'));
    expect(getAllComponentDirs(path.join(tmp, 'no-components'))).toEqual([]);
  });
});

describe('generateIndexFiles', () => {
  let tmp: string | undefined;

  afterEach(() => {
    if (tmp) {
      fs.rmSync(tmp, { recursive: true, force: true });
      tmp = undefined;
    }
  });

  it('writes component index with CSS side-effect when matching stylesheet exists', () => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-exp-'));
    const btnDir = path.join(tmp, 'components', 'atoms', 'button');
    fs.mkdirSync(btnDir, { recursive: true });
    fs.writeFileSync(
      path.join(btnDir, 'Button.js'),
      'export default function Button() {}\n',
      'utf8',
    );
    fs.writeFileSync(path.join(btnDir, 'Button.css'), '/* x */\n', 'utf8');

    generateIndexFiles(tmp);

    const indexPath = path.join(btnDir, 'index.js');
    expect(fs.readFileSync(indexPath, 'utf8')).toBe(
      `export { default } from './Button.js';\nexport * from './Button.js';\nimport './Button.css';\n`,
    );
  });

  it('generates hook barrel and root hooks index', () => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-exp-'));
    const hookDir = path.join(tmp, 'hooks', 'use-smoke');
    fs.mkdirSync(hookDir, { recursive: true });
    fs.writeFileSync(path.join(hookDir, 'use-smoke.js'), 'export function useSmoke() {}\n', 'utf8');

    generateIndexFiles(tmp);

    expect(fs.readFileSync(path.join(hookDir, 'index.js'), 'utf8')).toBe(
      `export * from './use-smoke.js';\nexport { default } from './use-smoke.js';\n`,
    );
    expect(fs.readFileSync(path.join(tmp, 'hooks', 'index.js'), 'utf8')).toBe(
      `export * from './use-smoke/index.js';\n`,
    );
  });

  it('generates enums and utils root index files when missing', () => {
    tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'gen-exp-'));
    fs.mkdirSync(path.join(tmp, 'enums'), { recursive: true });
    fs.writeFileSync(path.join(tmp, 'enums', 'colors.js'), 'export const X = 1;\n', 'utf8');
    fs.mkdirSync(path.join(tmp, 'utils'), { recursive: true });
    fs.writeFileSync(path.join(tmp, 'utils', 'helpers.js'), 'export const y = 2;\n', 'utf8');

    generateIndexFiles(tmp);

    expect(fs.readFileSync(path.join(tmp, 'enums', 'index.js'), 'utf8')).toBe(
      `export * from './colors.js';\n`,
    );
    expect(fs.readFileSync(path.join(tmp, 'utils', 'index.js'), 'utf8')).toBe(
      `export * from './helpers.js';\n`,
    );
  });
});
