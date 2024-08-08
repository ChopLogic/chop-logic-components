import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArrowDownIcon from '../ArrowDown';
import ArrowUpIcon from '../ArrowUp';
import BackIcon from '../Back';

describe('Chop Logic Icons', () => {
  it('BackIcon should match the snapshot', () => {
    const { asFragment } = render(<BackIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ArrowDownIcon should match the snapshot', () => {
    const { asFragment } = render(<ArrowDownIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ArrowUpIcon should match the snapshot', () => {
    const { asFragment } = render(<ArrowUpIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
