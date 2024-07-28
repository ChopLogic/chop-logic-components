import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ChopLogicErrorMessage from '../error-message/ErrorMessage';

describe('ChopLogicErrorMessage', () => {
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
