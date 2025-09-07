import { ChopLogicThemeMode } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { beforeEach, describe, expect, it } from 'vitest';

import { ChopLogicThemeContext } from '../ThemeContext.ts';
import { ChopLogicThemeProvider } from '../ThemeProvider.tsx';

function TestConsumer() {
  const { mode, setMode } = useContext(ChopLogicThemeContext);
  return (
    <>
      <div data-testid='mode'>{mode}</div>
      <button onClick={() => setMode(ChopLogicThemeMode.Dark)}>Switch</button>
    </>
  );
}

describe('ChopLogicThemeProvider', () => {
  beforeEach(() => {
    document.body.className = ''; // reset body classes before each test
  });

  it('applies default light theme on mount', () => {
    render(
      <ChopLogicThemeProvider>
        <TestConsumer />
      </ChopLogicThemeProvider>,
    );

    expect(screen.getByTestId('mode').textContent).toBe(ChopLogicThemeMode.Light);
    expect(document.body.classList.contains(ChopLogicThemeMode.Light)).toBe(true);
  });

  it('switches theme when setMode is called', async () => {
    render(
      <ChopLogicThemeProvider>
        <TestConsumer />
      </ChopLogicThemeProvider>,
    );

    expect(document.body.classList.contains(ChopLogicThemeMode.Light)).toBe(true);

    await userEvent.click(screen.getByRole('button', { name: /switch/i }));

    expect(screen.getByTestId('mode').textContent).toBe(ChopLogicThemeMode.Dark);
    expect(document.body.classList.contains(ChopLogicThemeMode.Dark)).toBe(true);
    expect(document.body.classList.contains(ChopLogicThemeMode.Light)).toBe(false);
  });

  it('applies injectedMode when provided', () => {
    render(
      <ChopLogicThemeProvider injectedMode={ChopLogicThemeMode.Dark}>
        <TestConsumer />
      </ChopLogicThemeProvider>,
    );

    expect(document.body.classList.contains(ChopLogicThemeMode.Dark)).toBe(true);
    expect(document.body.classList.contains(ChopLogicThemeMode.Light)).toBe(false);
  });

  it('updates body class when injectedMode changes', () => {
    const { rerender } = render(
      <ChopLogicThemeProvider injectedMode={ChopLogicThemeMode.Light}>
        <TestConsumer />
      </ChopLogicThemeProvider>,
    );

    expect(document.body.classList.contains(ChopLogicThemeMode.Light)).toBe(true);

    rerender(
      <ChopLogicThemeProvider injectedMode={ChopLogicThemeMode.Dark}>
        <TestConsumer />
      </ChopLogicThemeProvider>,
    );

    expect(document.body.classList.contains(ChopLogicThemeMode.Dark)).toBe(true);
    expect(document.body.classList.contains(ChopLogicThemeMode.Light)).toBe(false);
  });
});
