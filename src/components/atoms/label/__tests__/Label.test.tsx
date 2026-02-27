import { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Label from '../Label';

describe('Label', () => {
  const testProps = {
    label: 'Test label',
    required: true,
    inputId: 'test-input-id',
    testId: 'test-label',
  };

  it('should render correctly as required label', () => {
    const { asFragment } = render(<Label {...testProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly as not required label', () => {
    const { asFragment } = render(<Label {...testProps} required={false} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly without text', () => {
    const { asFragment } = render(<Label {...testProps} required={false} isTextHidden />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render left icon', () => {
    const { asFragment } = render(
      <Label {...testProps} required={false} icon={IconName.ArrowLeft} iconPosition="left" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should have a correct class for disabled label', () => {
    render(<Label {...testProps} required={false} icon={IconName.ArrowLeft} disabled />);
    expect(screen.getByTestId(testProps.testId)).toHaveClass('cl-label_disabled');
  });

  it('should a className as a prop', () => {
    render(
      <Label {...testProps} required={false} icon={IconName.ArrowLeft} className="custom-class" />,
    );
    expect(screen.getByTestId(testProps.testId)).toHaveClass('custom-class');
  });

  it('should render right icon', () => {
    const { asFragment } = render(
      <Label {...testProps} required={false} icon={IconName.ArrowDownRight} iconPosition="right" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
