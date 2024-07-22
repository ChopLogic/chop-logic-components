import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ChopLogicAlert from '../Alert';
import userEvent from '@testing-library/user-event';
import ChopLogicAlertHeader from '../elements/Header';

describe('ChopLogicAlert', () => {
  const testAlertProps = {
    isOpened: true,
    onClose: vi.fn(),
    title: 'Alert Title',
    message: 'This is an alert message.',
  };

  it('should render the alert correctly after a delay', async () => {
    render(<ChopLogicAlert {...testAlertProps} />);
    const title = await screen.findByText(testAlertProps.title);
    expect(title).toBeInTheDocument();
    const message = await screen.findByText(testAlertProps.message);
    expect(message).toBeInTheDocument();
  });

  it('should call the onClose handler', async () => {
    render(<ChopLogicAlert {...testAlertProps} />);
    const button = await screen.findByRole('button');
    await userEvent.click(button);
    expect(testAlertProps.onClose).toHaveBeenCalledOnce();
  });

  it('should have different headers depending on the mode', () => {
    const { asFragment: errorFragment } = render(<ChopLogicAlertHeader {...testAlertProps} mode='error' />);
    const { asFragment: warningFragment } = render(<ChopLogicAlertHeader {...testAlertProps} mode='warning' />);
    const { asFragment: helpFragment } = render(<ChopLogicAlertHeader {...testAlertProps} mode='help' />);
    const { asFragment: infoFragment } = render(<ChopLogicAlertHeader {...testAlertProps} mode='info' />);
    const { asFragment: successFragment } = render(<ChopLogicAlertHeader {...testAlertProps} mode='success' />);

    expect(errorFragment()).toMatchSnapshot();
    expect(warningFragment()).toMatchSnapshot();
    expect(helpFragment()).toMatchSnapshot();
    expect(infoFragment()).toMatchSnapshot();
    expect(successFragment()).toMatchSnapshot();
  });
});
