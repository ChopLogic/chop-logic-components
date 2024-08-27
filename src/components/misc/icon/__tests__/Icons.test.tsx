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
import ErrorIcon from '../elements/Error';
import ForwardIcon from '../elements/Forward';
import HelpIcon from '../elements/Help';
import InfoIcon from '../elements/Info';
import PasteIcon from '../elements/Paste';
import QuestionIcon from '../elements/Question';
import RemoveIcon from '../elements/Remove';
import SaveIcon from '../elements/Save';

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

  it('ErrorIcon should match the snapshot', () => {
    const { asFragment } = render(<ErrorIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ForwardIcon should match the snapshot', () => {
    const { asFragment } = render(<ForwardIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('HelpIcon should match the snapshot', () => {
    const { asFragment } = render(<HelpIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('InfoIcon should match the snapshot', () => {
    const { asFragment } = render(<InfoIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('PasteIcon should match the snapshot', () => {
    const { asFragment } = render(<PasteIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('QuestionIcon should match the snapshot', () => {
    const { asFragment } = render(<QuestionIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('RemoveIcon should match the snapshot', () => {
    const { asFragment } = render(<RemoveIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('SaveIcon should match the snapshot', () => {
    const { asFragment } = render(<SaveIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
