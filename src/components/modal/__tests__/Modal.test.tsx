import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import ChopLogicModalLayout from '../elements/Layout';

describe('ChopLogicModal component', () => {
  const testLayoutProps = {
    id: 'test-id',
    title: 'Test modal',
    onClose: vi.fn(),
  };

  it('should render correctly', () => {
    const { asFragment } = render(
      <ChopLogicModalLayout {...testLayoutProps}>
        <div>Test content</div>
      </ChopLogicModalLayout>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
