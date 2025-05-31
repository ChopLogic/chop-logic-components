import { ChopLogicButtonView, ChopLogicIconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Button from './Button.tsx';

describe('ChopLogicButton', () => {
  const testProps = {
    id: 'button-id',
    text: 'Test button',
    icon: ChopLogicIconName.Copy,
    className: 'button-class',
    view: ChopLogicButtonView.Primary,
    disabled: false,
  };

  it('should not render the text if view is icon', () => {
    render(<Button {...testProps} view={ChopLogicButtonView.Icon} />);
    expect(screen.queryByRole(testProps.text)).not.toBeInTheDocument();
  });
});
