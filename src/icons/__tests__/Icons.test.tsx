import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArrowDownIcon from '@/icons/ArrowDownIcon';
import ArrowUpIcon from '@/icons/ArrowUpIcon';
import BackIcon from '@/icons/BackIcon';
import CancelIcon from '@/icons/CancelIcon';
import CheckboxCheckedIcon from '@/icons/CheckboxCheckedIcon';
import CheckboxUncheckedIcon from '@/icons/CheckboxUncheckedIcon';
import CheckMarkIcon from '@/icons/CheckMarkIcon';
import ChevronDownIcon from '@/icons/ChevronDownIcon';
import ChevronLeftIcon from '@/icons/ChevronLeftIcon';
import ChevronRightIcon from '@/icons/ChevronRightIcon';
import ChevronUpIcon from '@/icons/ChevronUpIcon';
import ClearIcon from '@/icons/ClearIcon';
import CopyIcon from '@/icons/CopyIcon';
import CutIcon from '@/icons/CutIcon';
import DeleteIcon from '@/icons/DeleteIcon';
import DownloadIcon from '@/icons/DownloadIcon';
import ErrorIcon from '@/icons/ErrorIcon';
import ForwardIcon from '@/icons/ForwardIcon';
import HelpIcon from '@/icons/HelpIcon';
import HideIcon from '@/icons/HideIcon';
import InfoIcon from '@/icons/InfoIcon';
import PasteIcon from '@/icons/PasteIcon';
import QuestionIcon from '@/icons/QuestionIcon';
import RemoveIcon from '@/icons/RemoveIcon';
import SaveIcon from '@/icons/SaveIcon';
import ShowIcon from '@/icons/ShowIcon';
import UploadIcon from '@/icons/UploadIcon';
import WarningIcon from '@/icons/WarningIcon';

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
