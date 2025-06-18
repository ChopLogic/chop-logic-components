import { ChopLogicIconName } from '@enums';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ButtonInner from './ButtonInner.tsx';

describe('ButtonInner', () => {
  const testProps = {
    onClick: vi.fn(),
    label: 'Test input',
    icon: ChopLogicIconName.Remove,
  };

  it('should have the accessible label', () => {
    render(<ButtonInner {...testProps} />);
    expect(screen.getByLabelText(testProps.label)).toBeInTheDocument();
  });

  it('should call onClick handler', async () => {
    render(<ButtonInner {...testProps} />);
    await userEvent.click(screen.getByRole('button'));
    expect(testProps.onClick).toHaveBeenCalledOnce();
  });

  it('should have type button', () => {
    render(<ButtonInner {...testProps} />);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });
});
