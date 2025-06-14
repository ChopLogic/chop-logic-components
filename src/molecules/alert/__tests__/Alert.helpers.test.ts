import { ChopLogicAlertMode, ChopLogicIconName } from '@enums';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { getAlertTitle, renderAlertIcon } from '../Alert.helpers.tsx';

describe('getAlertTitle', () => {
  it('should return provided title when given', () => {
    expect(getAlertTitle(ChopLogicAlertMode.Info, 'Custom Title')).toBe('Custom Title');
  });

  it('should return the default title for Info mode', () => {
    expect(getAlertTitle(ChopLogicAlertMode.Info)).toBe('For your information');
  });

  it('should return the default title for Warning mode', () => {
    expect(getAlertTitle(ChopLogicAlertMode.Warning)).toBe('Please pay attention');
  });

  it('should return the default title for Error mode', () => {
    expect(getAlertTitle(ChopLogicAlertMode.Error)).toBe('Something went wrong');
  });

  it('should return the default title for Success mode', () => {
    expect(getAlertTitle(ChopLogicAlertMode.Success)).toBe('Everything is okay');
  });

  it('should return the default title for Help mode', () => {
    expect(getAlertTitle(ChopLogicAlertMode.Help)).toBe('Useful tip');
  });

  it('should return "Alert" for an unknown mode', () => {
    expect(getAlertTitle('unknown' as ChopLogicAlertMode)).toBe('Alert');
  });
});

describe('renderAlertIcon', () => {
  it('should render custom icon when provided', async () => {
    render(renderAlertIcon(ChopLogicAlertMode.Info, ChopLogicIconName.Cancel) as React.ReactElement);
    await waitFor(() => {
      expect(screen.getByRole('img')).toBeTruthy();
    });
  });

  it('should render Info icon for Info mode', () => {
    render(renderAlertIcon(ChopLogicAlertMode.Info) as React.ReactElement);
    expect(screen.getByRole('img', { hidden: true })).toBeTruthy();
  });

  it('should render Warning icon for Warning mode', () => {
    render(renderAlertIcon(ChopLogicAlertMode.Warning) as React.ReactElement);
    expect(screen.getByRole('img', { hidden: true })).toBeTruthy();
  });

  it('should render Error icon for Error mode', () => {
    render(renderAlertIcon(ChopLogicAlertMode.Error) as React.ReactElement);
    expect(screen.getByRole('img', { hidden: true })).toBeTruthy();
  });

  it('should render Success icon for Success mode', () => {
    render(renderAlertIcon(ChopLogicAlertMode.Success) as React.ReactElement);
    expect(screen.getByRole('img', { hidden: true })).toBeTruthy();
  });

  it('should render Help icon for Help mode', () => {
    render(renderAlertIcon(ChopLogicAlertMode.Help) as React.ReactElement);
    expect(screen.getByRole('img', { hidden: true })).toBeTruthy();
  });

  it('should return null for an unknown mode', () => {
    const result = renderAlertIcon('unknown' as ChopLogicAlertMode);
    expect(result).toBeNull();
  });
});
