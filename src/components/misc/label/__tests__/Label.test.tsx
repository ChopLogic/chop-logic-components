import { render } from '@testing-library/react';
import CheckboxCheckedIcon from 'components/misc/icon/elements/CheckboxChecked';
import { describe, expect, it } from 'vitest';

import ChopLogicLabel from 'components/misc/label/Label';

describe('ChopLogicLabel', () => {
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

  it('should render left icon', () => {
    const { asFragment } = render(<ChopLogicLabel {...testProps} required={false} icon={<CheckboxCheckedIcon />} iconPosition='left' />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render right icon', () => {
    const { asFragment } = render(<ChopLogicLabel {...testProps} required={false} icon={<CheckboxCheckedIcon />} iconPosition='left' />);
    expect(asFragment()).toMatchSnapshot();
  });
});
