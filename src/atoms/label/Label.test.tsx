import { ChopLogicIcon } from '@atoms';
import { ChopLogicIconName } from '@enums';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Label from './Label.tsx';

describe('Label', () => {
  const testProps = {
    label: 'Test label',
    required: true,
    inputId: 'test-input-id',
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
      <Label {...testProps} required={false} icon={<ChopLogicIcon name={ChopLogicIconName.Back} />} iconPosition='left' />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render right icon', () => {
    const { asFragment } = render(
      <Label {...testProps} required={false} icon={<ChopLogicIcon name={ChopLogicIconName.Forward} />} iconPosition='left' />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
