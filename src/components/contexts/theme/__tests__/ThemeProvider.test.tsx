import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';

import { CL_DARK_THEME_CLASS, CL_LIGHT_THEME_CLASS, ThemeContext } from '../ThemeContext';
import { ThemeProvider } from '../ThemeProvider';

function TestConsumer() {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <>
      <div data-testid="mode">{mode}</div>
      <button type="button" onClick={() => setMode(CL_DARK_THEME_CLASS)}>
        Switch
      </button>
    </>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    document.body.className = ''; // reset body classes before each test
  });

  it('applies default light theme on mount', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('mode').textContent).toBe(CL_LIGHT_THEME_CLASS);
    expect(document.body.classList.contains(CL_LIGHT_THEME_CLASS)).toBe(true);
  });

  it('switches theme when setMode is called', async () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>,
    );

    expect(document.body.classList.contains(CL_LIGHT_THEME_CLASS)).toBe(true);

    await userEvent.click(screen.getByRole('button', { name: /switch/i }));

    expect(screen.getByTestId('mode').textContent).toBe(CL_DARK_THEME_CLASS);
    expect(document.body.classList.contains(CL_DARK_THEME_CLASS)).toBe(true);
    expect(document.body.classList.contains(CL_LIGHT_THEME_CLASS)).toBe(false);
  });

  it('applies injectedMode when provided', () => {
    render(
      <ThemeProvider injectedMode={CL_DARK_THEME_CLASS}>
        <TestConsumer />
      </ThemeProvider>,
    );

    expect(document.body.classList.contains(CL_DARK_THEME_CLASS)).toBe(true);
    expect(document.body.classList.contains(CL_LIGHT_THEME_CLASS)).toBe(false);
  });

  it('updates body class when injectedMode changes', () => {
    const { rerender } = render(
      <ThemeProvider injectedMode={CL_LIGHT_THEME_CLASS}>
        <TestConsumer />
      </ThemeProvider>,
    );

    expect(document.body.classList.contains(CL_LIGHT_THEME_CLASS)).toBe(true);

    rerender(
      <ThemeProvider injectedMode={CL_DARK_THEME_CLASS}>
        <TestConsumer />
      </ThemeProvider>,
    );

    expect(document.body.classList.contains(CL_DARK_THEME_CLASS)).toBe(true);
    expect(document.body.classList.contains(CL_LIGHT_THEME_CLASS)).toBe(false);
  });
});
