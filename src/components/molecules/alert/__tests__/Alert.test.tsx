import { AlertMode } from '@enums';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { AlertProps } from '@types';
import { describe, expect, it, vi } from 'vitest';

import Alert from '../Alert';

const defaultProps: AlertProps = {
  isOpened: false,
  onClose: vi.fn(),
  message: 'This is a test message.',
  mode: AlertMode.Info,
  className: 'test-class',
  id: 'test-id',
};

const renderAlert = (props: Partial<AlertProps> = {}) => {
  return render(<Alert {...defaultProps} {...props} />);
};

describe('Alert', () => {
  it('should render nothing when not opened', () => {
    renderAlert();
    expect(screen.queryByText(defaultProps.message)).toBeNull();
  });

  it('should render the alert when opened', () => {
    renderAlert({ isOpened: true });
    expect(screen.getByText(defaultProps.message)).toBeInTheDocument();
    expect(screen.getByText('For your information')).toBeInTheDocument();
  });

  it('should call onClose when the close button is clicked', async () => {
    const onCloseMock = vi.fn();
    renderAlert({ isOpened: true, onClose: onCloseMock });
    const closeButton = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('should unmount the alert when it is closed', async () => {
    const { rerender } = renderAlert({ isOpened: true });
    rerender(<Alert {...defaultProps} isOpened={false} />);
    await waitFor(() => {
      expect(screen.queryByText('This is a test message')).not.toBeInTheDocument();
    });
  });

  it('should render error header', async () => {
    renderAlert({ isOpened: true, mode: AlertMode.Error });

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Something went wrong');
    });
  });

  it('should render warning header', async () => {
    renderAlert({ isOpened: true, mode: AlertMode.Warning });

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Please pay attention');
    });
  });

  it('should render help header', async () => {
    renderAlert({ isOpened: true, mode: AlertMode.Help });

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Useful tip');
    });
  });

  it('should render info header', async () => {
    renderAlert({ isOpened: true, mode: AlertMode.Info });

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('For your information');
    });
  });

  it('should render success header', async () => {
    renderAlert({ isOpened: true, mode: AlertMode.Success });

    await waitFor(() => {
      expect(screen.getByRole('heading')).toHaveTextContent('Everything is okay');
    });
  });

  it('should not render progress bar when autoClose is false', async () => {
    renderAlert({ isOpened: true, autoClose: false });
    const progressBar = screen.queryByRole('progressbar');
    await waitFor(() => {
      expect(progressBar).not.toBeInTheDocument();
    });
  });

  it('should not render the close button if autoClose is true', () => {
    const onCloseMock = vi.fn();
    renderAlert({ isOpened: true, onClose: onCloseMock, autoClose: true });
    const closeButton = screen.queryByRole('button', { name: /close/i });
    expect(closeButton).not.toBeInTheDocument();
  });

  it('should render progress bar when autoClose is true', async () => {
    renderAlert({ isOpened: true, autoClose: true });
    const progressBar = screen.getByRole('progressbar');
    await waitFor(() => {
      expect(progressBar).toBeInTheDocument();
    });
  });

  it('should pass remainingPercentage to AlertProgressBar', async () => {
    renderAlert({ isOpened: true, autoClose: true });
    const progressBar = screen.getByRole('progressbar') as HTMLProgressElement;
    await waitFor(() => {
      expect(progressBar).toHaveAttribute('value');
      expect(progressBar.value).toBeGreaterThanOrEqual(0);
      expect(progressBar.value).toBeLessThanOrEqual(100);
    });
  });

  it('should update progress bar value over time', async () => {
    renderAlert({ isOpened: true, autoClose: true, autoCloseDelay: 5000 });
    const progressBar = screen.getByRole('progressbar') as HTMLProgressElement;
    const initialValue = progressBar.value;

    await waitFor(
      () => {
        expect(progressBar.value).toBeLessThan(initialValue);
      },
      { timeout: 1000 },
    );
  });
});
