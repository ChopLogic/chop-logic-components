import { render, screen } from '@testing-library/react';
import { PointerEventsCheckLevel, userEvent } from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { CLIcon } from 'components/misc/icon/types';

import Button from '../Button';
import { ChopLogicButtonView } from '../types';

describe('ChopLogicButton', () => {
  const testProps = {
    id: 'test-button-id',
    text: 'Test button',
    icon: CLIcon.Copy,
    className: 'test-button-class',
    view: 'danger' as ChopLogicButtonView,
    disabled: false,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<Button {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have the accessible role', () => {
    render(<Button {...testProps} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not render the text if view is icon', () => {
    render(<Button {...testProps} view='icon' />);
    expect(screen.queryByRole(testProps.text)).not.toBeInTheDocument();
  });

  it('should call the callback function on click', async () => {
    const mockedCallback = vi.fn();
    render(<Button {...testProps} onClick={mockedCallback} />);
    await userEvent.click(screen.getByRole('button'));
    expect(mockedCallback).toHaveBeenCalledOnce();
  });

  it('should not call the callback function on click if the button is disabled', async () => {
    const mockedCallback = vi.fn();
    render(<Button {...testProps} onClick={mockedCallback} disabled={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    await userEvent.click(button, {
      pointerEventsCheck: PointerEventsCheckLevel.Never,
    });
    expect(mockedCallback).not.toHaveBeenCalled();
  });

  it('should have focus on Tab press', () => {
    render(<Button {...testProps} />);
    const button = screen.getByRole('button');
    expect(button).not.toHaveFocus();
    button.focus();
  });

  it('should call the callback function on Enter press', async () => {
    const mockedCallback = vi.fn();
    render(<Button {...testProps} onClick={mockedCallback} />);
    const button = screen.getByRole('button');
    button.focus();
    await userEvent.keyboard('{Enter}');
    expect(mockedCallback).toHaveBeenCalledOnce();
  });
});
