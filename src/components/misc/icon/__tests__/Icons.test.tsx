import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArrowDownIcon from '../elements/ArrowDown';
import ArrowUpIcon from '../elements/ArrowUp';
import BackIcon from '../elements/Back';
import CancelIcon from '../elements/Cancel';

describe('ChopLogicIcon', () => {
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

  it('CancelIcon should match the snapshot', () => {
    const { asFragment } = render(<CancelIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
