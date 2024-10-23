import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArrowDownIcon from '../elements/ArrowDown';
import ArrowUpIcon from '../elements/ArrowUp';
import BackIcon from '../elements/Back';
import CancelIcon from '../elements/Cancel';
import CheckboxCheckedIcon from '../elements/CheckboxChecked';
import CheckboxUncheckedIcon from '../elements/CheckboxUnchecked';
import CheckMarkIcon from '../elements/CheckMark';
import ChevronDownIcon from '../elements/ChevronDown';
import ChevronLeftIcon from '../elements/ChevronLeft';
import ChevronRightIcon from '../elements/ChevronRight';
import ChevronUpIcon from '../elements/ChevronUp';
import ClearIcon from '../elements/Clear';
import CopyIcon from '../elements/Copy';
import CutIcon from '../elements/Cut';
import DeleteIcon from '../elements/Delete';
import DownloadIcon from '../elements/Download';
import ErrorIcon from '../elements/Error';
import ForwardIcon from '../elements/Forward';
import HelpIcon from '../elements/Help';
import HideIcon from '../elements/Hide';
import InfoIcon from '../elements/Info';
import PasteIcon from '../elements/Paste';
import QuestionIcon from '../elements/Question';
import RemoveIcon from '../elements/Remove';
import SaveIcon from '../elements/Save';
import ShowIcon from '../elements/Show';
import UploadIcon from '../elements/Upload';
import WarningIcon from '../elements/Warning';

describe('ChopLogicIcon', () => {
  it('BackIcon', () => {
    const { asFragment } = render(<BackIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ArrowDownIcon', () => {
    const { asFragment } = render(<ArrowDownIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ArrowUpIcon', () => {
    const { asFragment } = render(<ArrowUpIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CancelIcon', () => {
    const { asFragment } = render(<CancelIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CheckboxCheckedIcon', () => {
    const { asFragment } = render(<CheckboxCheckedIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CheckboxUncheckedIcon', () => {
    const { asFragment } = render(<CheckboxUncheckedIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CheckMarkIcon', () => {
    const { asFragment } = render(<CheckMarkIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ClearIcon', () => {
    const { asFragment } = render(<ClearIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CopyIcon', () => {
    const { asFragment } = render(<CopyIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CutIcon', () => {
    const { asFragment } = render(<CutIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('DeleteIcon', () => {
    const { asFragment } = render(<DeleteIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('DownloadIcon', () => {
    const { asFragment } = render(<DownloadIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ErrorIcon', () => {
    const { asFragment } = render(<ErrorIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ForwardIcon', () => {
    const { asFragment } = render(<ForwardIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('HelpIcon', () => {
    const { asFragment } = render(<HelpIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('HideIcon', () => {
    const { asFragment } = render(<HideIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('InfoIcon', () => {
    const { asFragment } = render(<InfoIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('PasteIcon', () => {
    const { asFragment } = render(<PasteIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('QuestionIcon', () => {
    const { asFragment } = render(<QuestionIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('RemoveIcon', () => {
    const { asFragment } = render(<RemoveIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('SaveIcon', () => {
    const { asFragment } = render(<SaveIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ShowIcon', () => {
    const { asFragment } = render(<ShowIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('UploadIcon', () => {
    const { asFragment } = render(<UploadIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ChevronDownIcon', () => {
    const { asFragment } = render(<ChevronDownIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ChevronUpIcon', () => {
    const { asFragment } = render(<ChevronUpIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ChevronLeftIcon', () => {
    const { asFragment } = render(<ChevronLeftIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ChevronRightIcon', () => {
    const { asFragment } = render(<ChevronRightIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('WarningIcon', () => {
    const { asFragment } = render(<WarningIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
