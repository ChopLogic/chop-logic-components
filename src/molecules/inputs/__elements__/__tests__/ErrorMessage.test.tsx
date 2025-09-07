import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ErrorMessage } from '../error-message/ErrorMessage.tsx';

describe('ErrorMessage', () => {
  const testProps = {
    errorId: 'test-error-id',
    visible: true,
    message: 'Incorrect input',
  };

  it('should display the message', () => {
    render(<ErrorMessage {...testProps} />);
    expect(screen.getByText(testProps.message)).toBeInTheDocument();
  });

  it('should display the default message', () => {
    render(<ErrorMessage errorId='test-error' />);
    expect(screen.getByText('Error!')).toBeInTheDocument();
  });

  it('should contain the test id', () => {
    const testId = 'test-message-id';
    render(<ErrorMessage {...testProps} testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
