// @vitest-environment node
import { describe, expect, it, vi } from 'vitest';
import { runReleaseVersion, VALID_BUMPS } from '../release-version';
import { silenceScriptConsoleInTests } from './silence-script-console.js';

silenceScriptConsoleInTests();

describe('runReleaseVersion', () => {
  it('calls npm version then git add, commit, tag, and push (mocked — no real git or npm)', () => {
    const calls: [string, string[]][] = [];
    const runCommand = vi.fn((command: string, args: string[]) => {
      calls.push([command, [...args]]);
    });
    const readPackageJson = vi.fn(() => ({ version: '9.9.9' }));

    runReleaseVersion('patch', { runCommand, readPackageJson });

    expect(readPackageJson).toHaveBeenCalledOnce();
    expect(calls[0]).toEqual(['npm', ['version', 'patch', '--no-git-tag-version']]);
    expect(calls.slice(1)).toEqual([
      ['git', ['add', 'package.json', 'package-lock.json']],
      ['git', ['commit', '-m', 'chore: release v9.9.9']],
      ['git', ['tag', '-a', 'v9.9.9', '-m', 'Release v9.9.9']],
      ['git', ['push', 'origin', 'main']],
      ['git', ['push', 'origin', 'v9.9.9']],
    ]);
  });

  it('rejects invalid bump without invoking runCommand', () => {
    const runCommand = vi.fn();

    expect(() =>
      // @ts-expect-error intentional invalid bump
      runReleaseVersion('not-a-bump', {
        runCommand,
        readPackageJson: () => ({ version: '1.0.0' }),
      }),
    ).toThrow(/Invalid version bump/);

    expect(runCommand).not.toHaveBeenCalled();
  });

  it('documents supported bumps', () => {
    expect(VALID_BUMPS).toEqual(['patch', 'minor', 'major']);
  });
});
