import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import ChopLogicLabel from '../label/Label';

describe('ChopLogicLabel component', () => {
  const testProps = {
    label: 'Test label',
    required: true,
    inputId: 'test-input-id',
    className: 'test-class-name',
  };

  it('should render correctly as required label', () => {
    const { asFragment } = render(<ChopLogicLabel {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly as not required label', () => {
    const { asFragment } = render(<ChopLogicLabel {...testProps} required={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly without text', () => {
    const { asFragment } = render(<ChopLogicLabel {...testProps} required={false} isTextHidden />);
    expect(asFragment()).toMatchSnapshot();
  });
});
