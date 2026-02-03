import type { IconName } from '@enums';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { IconDictionary } from '../Icon';

describe('SVG Icons', () => {
  it('should match the snapshot', () => {
    for (const name in IconDictionary) {
      const Component = IconDictionary[name as IconName];
      const { asFragment } = render(<Component />);
      expect(asFragment()).toMatchSnapshot();
    }
  });

  it('should render an optional title', () => {
    for (const name in IconDictionary) {
      const Component = IconDictionary[name as IconName];
      const testTitle = `Title for ${name}`;
      render(<Component title={testTitle} />);
      expect(screen.getByTitle(testTitle)).toBeInTheDocument();
    }
  });
});
