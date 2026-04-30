export const VALID_BUMPS: readonly ['patch', 'minor', 'major'];
export function runReleaseVersion(
  bump: 'patch' | 'minor' | 'major',
  options?: {
    runCommand?: (command: string, args: string[]) => void;
    readPackageJson?: () => { version: string };
  },
): void;
