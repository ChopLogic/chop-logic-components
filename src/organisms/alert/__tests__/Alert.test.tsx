import { AlertMode } from '@enums';
import { ChopLogicAlertProps } from '@models';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import ChopLogicAlert from '../Alert.tsx';

const defaultProps: ChopLogicAlertProps = {
  isOpened: false,
  onClose: vi.fn(),
  message: 'This is a test message.',
  mode: AlertMode.Info,
  className: 'test-class',
  id: 'test-id',
};

const renderAlert = (props: Partial<ChopLogicAlertProps> = {}) => {
  return render(<ChopLogicAlert {...defaultProps} {...props} />);
};

describe('ChopLogicAlert', () => {
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
    rerender(<ChopLogicAlert {...defaultProps} isOpened={false} />);
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
});
