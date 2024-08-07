import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import BackIcon from '../Back';

describe('Chop Logic Icons', () => {
  it('BackIcon should match the snapshot', () => {
    const { asFragment } = render(<BackIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
