import { getInitialColorMode } from 'utils/get-initial-color-mode';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

describe('getInitialColorMode', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should return the persisted color mode if it exists in localStorage', () => {
    localStorage.setItem('color-mode', 'dark');

    expect(getInitialColorMode()).toBe('dark');
  });

  it('should return "dark" if there is no persisted color mode and prefers-color-scheme is dark', () => {
    vi.spyOn(window.localStorage, 'getItem').mockReturnValue(null);

    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: true,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    } as unknown as MediaQueryList);

    expect(getInitialColorMode()).toBe('dark');
  });

  it('should return "light" if there is no persisted color mode and prefers-color-scheme is light', () => {
    vi.spyOn(window.localStorage, 'getItem').mockReturnValue(null);

    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: false,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    } as unknown as MediaQueryList);

    expect(getInitialColorMode()).toBe('light');
  });

  it('should default to "light" if there is no persisted color mode and matchMedia is not supported', () => {
    vi.spyOn(window.localStorage, 'getItem').mockReturnValue(null);

    vi.spyOn(window, 'matchMedia').mockReturnValue({
      matches: undefined,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    } as unknown as MediaQueryList);

    expect(getInitialColorMode()).toBe('light');
  });
});
