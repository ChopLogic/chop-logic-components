import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ChopLogicErrorMessage from '../error-message/ErrorMessage';

describe('ChopLogicErrorMessage component', () => {
  const testProps = {
    errorId: 'test-error-id',
    visible: true,
    message: 'Incorrect input',
    className: 'custom-error',
  };

  it('should render correctly', () => {
    const { asFragment } = render(<ChopLogicErrorMessage {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
