import { ThemeMode } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';

import { ThemeContext } from '../ThemeContext';
import { ThemeProvider } from '../ThemeProvider';

function TestConsumer() {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <>
      <div data-testid="mode">{mode}</div>
      <button type="button" onClick={() => setMode(ThemeMode.Dark)}>
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

    expect(screen.getByTestId('mode').textContent).toBe(ThemeMode.Light);
    expect(document.body.classList.contains(ThemeMode.Light)).toBe(true);
  });

  it('switches theme when setMode is called', async () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>,
    );

    expect(document.body.classList.contains(ThemeMode.Light)).toBe(true);

    await userEvent.click(screen.getByRole('button', { name: /switch/i }));

    expect(screen.getByTestId('mode').textContent).toBe(ThemeMode.Dark);
    expect(document.body.classList.contains(ThemeMode.Dark)).toBe(true);
    expect(document.body.classList.contains(ThemeMode.Light)).toBe(false);
  });

  it('applies injectedMode when provided', () => {
    render(
      <ThemeProvider injectedMode={ThemeMode.Dark}>
        <TestConsumer />
      </ThemeProvider>,
    );

    expect(document.body.classList.contains(ThemeMode.Dark)).toBe(true);
    expect(document.body.classList.contains(ThemeMode.Light)).toBe(false);
  });

  it('updates body class when injectedMode changes', () => {
    const { rerender } = render(
      <ThemeProvider injectedMode={ThemeMode.Light}>
        <TestConsumer />
      </ThemeProvider>,
    );

    expect(document.body.classList.contains(ThemeMode.Light)).toBe(true);

    rerender(
      <ThemeProvider injectedMode={ThemeMode.Dark}>
        <TestConsumer />
      </ThemeProvider>,
    );

    expect(document.body.classList.contains(ThemeMode.Dark)).toBe(true);
    expect(document.body.classList.contains(ThemeMode.Light)).toBe(false);
  });
});
