import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import ArrowDownIcon from '../svg/ArrowDownIcon.tsx';
import ArrowUpIcon from '../svg/ArrowUpIcon.tsx';
import BackIcon from '../svg/BackIcon.tsx';
import CancelIcon from '../svg/CancelIcon.tsx';
import CheckboxCheckedIcon from '../svg/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from '../svg/CheckboxUncheckedIcon.tsx';
import CheckMarkIcon from '../svg/CheckMarkIcon.tsx';
import ChevronDownIcon from '../svg/ChevronDownIcon.tsx';
import ChevronLeftIcon from '../svg/ChevronLeftIcon.tsx';
import ChevronRightIcon from '../svg/ChevronRightIcon.tsx';
import ChevronUpIcon from '../svg/ChevronUpIcon.tsx';
import ClearIcon from '../svg/ClearIcon.tsx';
import CopyIcon from '../svg/CopyIcon.tsx';
import CutIcon from '../svg/CutIcon.tsx';
import DeleteIcon from '../svg/DeleteIcon.tsx';
import DownloadIcon from '../svg/DownloadIcon.tsx';
import ErrorIcon from '../svg/ErrorIcon.tsx';
import ForwardIcon from '../svg/ForwardIcon.tsx';
import GraduateIcon from '../svg/GraduateIcon.tsx';
import HelpIcon from '../svg/HelpIcon.tsx';
import HideIcon from '../svg/HideIcon.tsx';
import HomeIcon from '../svg/HomeIcon.tsx';
import InfoIcon from '../svg/InfoIcon.tsx';
import LoginIcon from '../svg/LoginIcon.tsx';
import PasteIcon from '../svg/PasteIcon.tsx';
import QuestionIcon from '../svg/QuestionIcon.tsx';
import RemoveIcon from '../svg/RemoveIcon.tsx';
import SaveIcon from '../svg/SaveIcon.tsx';
import ShowIcon from '../svg/ShowIcon.tsx';
import UploadIcon from '../svg/UploadIcon.tsx';
import WarningIcon from '../svg/WarningIcon.tsx';

describe('Icon', () => {
  it('ArrowDownIcon matched the snapshot', () => {
    const { asFragment } = render(<ArrowDownIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ArrowUpIcon matched the snapshot', () => {
    const { asFragment } = render(<ArrowUpIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('BackIcon matched the snapshot', () => {
    const { asFragment } = render(<BackIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CancelIcon matched the snapshot', () => {
    const { asFragment } = render(<CancelIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CheckboxCheckedIcon matched the snapshot', () => {
    const { asFragment } = render(<CheckboxCheckedIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CheckboxUncheckedIcon matched the snapshot', () => {
    const { asFragment } = render(<CheckboxUncheckedIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CheckMarkIcon matched the snapshot', () => {
    const { asFragment } = render(<CheckMarkIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ChevronDownIcon matched the snapshot', () => {
    const { asFragment } = render(<ChevronDownIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ChevronLeftIcon matched the snapshot', () => {
    const { asFragment } = render(<ChevronLeftIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ChevronRightIcon matched the snapshot', () => {
    const { asFragment } = render(<ChevronRightIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ChevronUpIcon matched the snapshot', () => {
    const { asFragment } = render(<ChevronUpIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ClearIcon matched the snapshot', () => {
    const { asFragment } = render(<ClearIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CopyIcon matched the snapshot', () => {
    const { asFragment } = render(<CopyIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('CutIcon matched the snapshot', () => {
    const { asFragment } = render(<CutIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('DeleteIcon matched the snapshot', () => {
    const { asFragment } = render(<DeleteIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('DownloadIcon matched the snapshot', () => {
    const { asFragment } = render(<DownloadIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ErrorIcon matched the snapshot', () => {
    const { asFragment } = render(<ErrorIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ForwardIcon matched the snapshot', () => {
    const { asFragment } = render(<ForwardIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('GraduateIcon matched the snapshot', () => {
    const { asFragment } = render(<GraduateIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('HelpIcon matched the snapshot', () => {
    const { asFragment } = render(<HelpIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('HideIcon matched the snapshot', () => {
    const { asFragment } = render(<HideIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('HomeIcon matched the snapshot', () => {
    const { asFragment } = render(<HomeIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('InfoIcon matched the snapshot', () => {
    const { asFragment } = render(<InfoIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('LoginIcon matched the snapshot', () => {
    const { asFragment } = render(<LoginIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('PasteIcon matched the snapshot', () => {
    const { asFragment } = render(<PasteIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('QuestionIcon matched the snapshot', () => {
    const { asFragment } = render(<QuestionIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('RemoveIcon matched the snapshot', () => {
    const { asFragment } = render(<RemoveIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('SaveIcon matched the snapshot', () => {
    const { asFragment } = render(<SaveIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('ShowIcon matched the snapshot', () => {
    const { asFragment } = render(<ShowIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('UploadIcon matched the snapshot', () => {
    const { asFragment } = render(<UploadIcon />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('WarningIcon matched the snapshot', () => {
    const { asFragment } = render(<WarningIcon />);
    expect(asFragment()).toMatchSnapshot();
  });
});
