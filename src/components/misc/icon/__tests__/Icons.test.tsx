import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArrowDownIcon from '../elements/ArrowDown';
import ArrowUpIcon from '../elements/ArrowUp';
import BackIcon from '../elements/Back';
import CancelIcon from '../elements/Cancel';
import CheckboxCheckedIcon from '../elements/CheckboxChecked';
import CheckboxUncheckedIcon from '../elements/CheckboxUnchecked';
import CheckMarkIcon from '../elements/CheckMark';
import CopyIcon from '../elements/Copy';
import CutIcon from '../elements/Cut';
import DeleteIcon from '../elements/Delete';
import DownloadIcon from '../elements/Download';

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

  it('CheckboxCheckedIcon should match the snapshot', () => {
    const { asFragment } = render(<CheckboxCheckedIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CheckboxUncheckedIcon should match the snapshot', () => {
    const { asFragment } = render(<CheckboxUncheckedIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CheckMarkIcon should match the snapshot', () => {
    const { asFragment } = render(<CheckMarkIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CopyIcon should match the snapshot', () => {
    const { asFragment } = render(<CopyIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CutIcon should match the snapshot', () => {
    const { asFragment } = render(<CutIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('DeleteIcon should match the snapshot', () => {
    const { asFragment } = render(<DeleteIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('DownloadIcon should match the snapshot', () => {
    const { asFragment } = render(<DownloadIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
