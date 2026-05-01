import { afterEach, beforeEach, vi } from 'vitest';

/** Keeps script `console.log` output out of the Vitest reporter. */
export function silenceScriptConsoleInTests() {
  let logSpy: ReturnType<typeof vi.spyOn> | undefined;

  beforeEach(() => {
    logSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    logSpy?.mockRestore();
  });
}
