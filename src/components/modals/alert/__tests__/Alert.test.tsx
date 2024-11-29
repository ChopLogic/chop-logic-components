import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { ChopLogicAlertMode } from '@/enums';
import { ChopLogicAlertProps } from '@/types';

import ChopLogicAlert from '../Alert';
import ChopLogicAlertHeader from '../elements/Header';

const defaultProps: ChopLogicAlertProps = {
  isOpened: false,
  onClose: vi.fn(),
  message: 'This is a test message.',
  title: 'Test Alert Title',
  mode: ChopLogicAlertMode.Help,
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
    expect(screen.getByText('Test Alert Title')).toBeInTheDocument();
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

  it('should have different headers depending on the mode', () => {
    const { asFragment: errorFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode={ChopLogicAlertMode.Error} />);
    const { asFragment: warningFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode={ChopLogicAlertMode.Warning} />);
    const { asFragment: helpFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode={ChopLogicAlertMode.Help} />);
    const { asFragment: infoFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode={ChopLogicAlertMode.Info} />);
    const { asFragment: successFragment } = render(<ChopLogicAlertHeader {...defaultProps} mode={ChopLogicAlertMode.Success} />);

    expect(errorFragment()).toMatchSnapshot();
    expect(warningFragment()).toMatchSnapshot();
    expect(helpFragment()).toMatchSnapshot();
    expect(infoFragment()).toMatchSnapshot();
    expect(successFragment()).toMatchSnapshot();
  });
});
