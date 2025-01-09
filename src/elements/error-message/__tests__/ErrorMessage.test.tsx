import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ChopLogicErrorMessage from '../ErrorMessage';

import { DARK_THEME } from '@css';

describe('ChopLogicErrorMessage', () => {
  const testProps = {
    errorId: 'test-error-id',
    visible: true,
    message: 'Incorrect input',
    theme: DARK_THEME,
  };

  it('should match the snapshot', () => {
    const { asFragment } = render(<ChopLogicErrorMessage {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contain the test id', () => {
    const testId = 'test-message-id';
    render(<ChopLogicErrorMessage {...testProps} testId={testId} />);
    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });
});
