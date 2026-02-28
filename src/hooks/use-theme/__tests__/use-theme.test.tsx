import { CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS } from '@components/contexts';
import { ThemeProvider } from '@components/contexts/theme/ThemeProvider';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import { useTheme } from '../use-theme';

function TestComponent() {
  const { mode, setMode } = useTheme();

  return (
    <>
      <div data-testid="current-mode">{mode}</div>
      <button type="button" onClick={() => setMode(CL_DARK_THEME_CLASS)} data-testid="switch-dark">
        Switch to Dark
      </button>
      <button
        type="button"
        onClick={() => setMode(CL_LIGHT_THEME_CLASS)}
        data-testid="switch-light"
      >
        Switch to Light
      </button>
    </>
  );
}

describe('useTheme', () => {
  beforeEach(() => {
    document.body.className = ''; // reset body classes before each test
  });

  it('should return the current theme mode', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const modeElement = screen.getByTestId('current-mode');
    expect(modeElement.textContent).toBe(CL_LIGHT_THEME_CLASS);
  });

  it('should allow switching to dark theme', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const modeElement = screen.getByTestId('current-mode');
    const switchDarkButton = screen.getByTestId('switch-dark');

    expect(modeElement.textContent).toBe(CL_LIGHT_THEME_CLASS);

    await userEvent.click(switchDarkButton);

    expect(modeElement.textContent).toBe(CL_DARK_THEME_CLASS);
  });

  it('should allow switching to light theme', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const modeElement = screen.getByTestId('current-mode');
    const switchDarkButton = screen.getByTestId('switch-dark');
    const switchLightButton = screen.getByTestId('switch-light');

    expect(modeElement.textContent).toBe(CL_LIGHT_THEME_CLASS);

    await userEvent.click(switchDarkButton);
    expect(modeElement.textContent).toBe(CL_DARK_THEME_CLASS);

    await userEvent.click(switchLightButton);
    expect(modeElement.textContent).toBe(CL_LIGHT_THEME_CLASS);
  });

  it('should toggle between themes multiple times', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>,
    );

    const modeElement = screen.getByTestId('current-mode');
    const switchDarkButton = screen.getByTestId('switch-dark');
    const switchLightButton = screen.getByTestId('switch-light');

    expect(modeElement.textContent).toBe(CL_LIGHT_THEME_CLASS);

    await userEvent.click(switchDarkButton);
    expect(modeElement.textContent).toBe(CL_DARK_THEME_CLASS);

    await userEvent.click(switchLightButton);
    expect(modeElement.textContent).toBe(CL_LIGHT_THEME_CLASS);

    await userEvent.click(switchDarkButton);
    expect(modeElement.textContent).toBe(CL_DARK_THEME_CLASS);
  });

  it('should provide both mode and setMode from context', () => {
    function ContextCheckComponent() {
      const context = useTheme();

      return (
        <>
          <div data-testid="has-mode">{context.mode ? 'yes' : 'no'}</div>
          <div data-testid="has-setMode">
            {typeof context.setMode === 'function' ? 'yes' : 'no'}
          </div>
        </>
      );
    }

    render(
      <ThemeProvider>
        <ContextCheckComponent />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('has-mode').textContent).toBe('yes');
    expect(screen.getByTestId('has-setMode').textContent).toBe('yes');
  });
});
