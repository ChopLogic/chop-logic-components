import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ChopLogicAlert from '../Alert';
import ChopLogicAlertHeader from '../elements/Header';
import { ChopLogicAlertProps } from '../types';

const defaultProps: ChopLogicAlertProps = {
  isOpened: false,
  onClose: vi.fn(),
  message: 'This is a test message',
  title: 'Test Title',
  mode: 'info',
};

const renderAlert = (props: Partial<ChopLogicAlertProps> = {}) => {
  return render(<ChopLogicAlert {...defaultProps} {...props} />);
};

describe('ChopLogicAlert', () => {
  it('should render nothing when not opened', () => {
    renderAlert();
    expect(screen.queryByText('This is a test message')).toBeNull();
  });

  it('should render the alert when opened', () => {
    renderAlert({ isOpened: true });
    expect(screen.getByText('This is a test message')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', async () => {
    const onCloseMock = vi.fn();
    renderAlert({ isOpened: true, onClose: onCloseMock });
    const closeButton = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should apply the correct mode class based on the mode prop', () => {
    const { rerender } = renderAlert({ isOpened: true, mode: 'error' });
    expect(screen.getByText('This is a test message').closest('.cl-alert__content')).toHaveClass('cl-alert__content_error');

    rerender(<ChopLogicAlert {...defaultProps} isOpened={true} mode='success' />);
    expect(screen.getByText('This is a test message').closest('.cl-alert__content')).toHaveClass('cl-alert__content_success');
  });

  it('should unmount the alert when it is closed', async () => {
    const { rerender } = renderAlert({ isOpened: true });
    rerender(<ChopLogicAlert {...defaultProps} isOpened={false} />);
    await waitFor(() => {
      expect(screen.queryByText('This is a test message')).not.toBeInTheDocument();
    });
  });

  it('should have different headers depending on the mode', () => {
    const { asFragment: errorFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode='error' />);
    const { asFragment: warningFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode='warning' />);
    const { asFragment: helpFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode='help' />);
    const { asFragment: infoFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode='info' />);
    const { asFragment: successFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode='success' />);

    expect(errorFragment()).toMatchSnapshot();
    expect(warningFragment()).toMatchSnapshot();
    expect(helpFragment()).toMatchSnapshot();
    expect(infoFragment()).toMatchSnapshot();
    expect(successFragment()).toMatchSnapshot();
  });
});
