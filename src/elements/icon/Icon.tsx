import React, { lazy, Suspense } from 'react';

import { ChopLogicIconName } from '@/enums';
import { ChopLogicIconProps, ChopLogicLazyIcons } from '@/types';

const ArrowDownIcon = lazy(() => import('@/icons/ArrowDownIcon'));
const ArrowUpIcon = lazy(() => import('@/icons/ArrowUpIcon'));
const BackIcon = lazy(() => import('@/icons/BackIcon'));
const CancelIcon = lazy(() => import('@/icons/CancelIcon'));
const CheckboxCheckedIcon = lazy(() => import('@/icons/CheckboxCheckedIcon'));
const CheckboxUncheckedIcon = lazy(() => import('@/icons/CheckboxUncheckedIcon'));
const CheckMarkIcon = lazy(() => import('@/icons/CheckMarkIcon'));
const ChevronDownIcon = lazy(() => import('@/icons/ChevronDownIcon'));
const ChevronLeftIcon = lazy(() => import('@/icons/ChevronLeftIcon'));
const ChevronRightIcon = lazy(() => import('@/icons/ChevronRightIcon'));
const ChevronUpIcon = lazy(() => import('@/icons/ChevronUpIcon'));
const ClearIcon = lazy(() => import('@/icons/ClearIcon'));
const CopyIcon = lazy(() => import('@/icons/CopyIcon'));
const CutIcon = lazy(() => import('@/icons/CutIcon'));
const DeleteIcon = lazy(() => import('@/icons/DeleteIcon'));
const DownloadIcon = lazy(() => import('@/icons/DownloadIcon'));
const ErrorIcon = lazy(() => import('@/icons/ErrorIcon'));
const ForwardIcon = lazy(() => import('@/icons/ForwardIcon'));
const HelpIcon = lazy(() => import('@/icons/HelpIcon'));
const HideIcon = lazy(() => import('@/icons/HideIcon'));
const InfoIcon = lazy(() => import('@/icons/InfoIcon'));
const PasteIcon = lazy(() => import('@/icons/PasteIcon'));
const QuestionIcon = lazy(() => import('@/icons/QuestionIcon'));
const RemoveIcon = lazy(() => import('@/icons/RemoveIcon'));
const SaveIcon = lazy(() => import('@/icons/SaveIcon'));
const ShowIcon = lazy(() => import('@/icons/ShowIcon'));
const UploadIcon = lazy(() => import('@/icons/UploadIcon'));
const WarningIcon = lazy(() => import('@/icons/WarningIcon'));

const ChopLogicIconDictionary: ChopLogicLazyIcons = {
  [ChopLogicIconName.ArrowDown]: ArrowDownIcon,
  [ChopLogicIconName.ArrowUp]: ArrowUpIcon,
  [ChopLogicIconName.Back]: BackIcon,
  [ChopLogicIconName.Cancel]: CancelIcon,
  [ChopLogicIconName.CheckboxChecked]: CheckboxCheckedIcon,
  [ChopLogicIconName.CheckboxUnchecked]: CheckboxUncheckedIcon,
  [ChopLogicIconName.CheckMark]: CheckMarkIcon,
  [ChopLogicIconName.ChevronDown]: ChevronDownIcon,
  [ChopLogicIconName.ChevronUp]: ChevronUpIcon,
  [ChopLogicIconName.ChevronLeft]: ChevronLeftIcon,
  [ChopLogicIconName.ChevronRight]: ChevronRightIcon,
  [ChopLogicIconName.Clear]: ClearIcon,
  [ChopLogicIconName.Copy]: CopyIcon,
  [ChopLogicIconName.Cut]: CutIcon,
  [ChopLogicIconName.Delete]: DeleteIcon,
  [ChopLogicIconName.Download]: DownloadIcon,
  [ChopLogicIconName.Error]: ErrorIcon,
  [ChopLogicIconName.Forward]: ForwardIcon,
  [ChopLogicIconName.Help]: HelpIcon,
  [ChopLogicIconName.Hide]: HideIcon,
  [ChopLogicIconName.Info]: InfoIcon,
  [ChopLogicIconName.Paste]: PasteIcon,
  [ChopLogicIconName.Question]: QuestionIcon,
  [ChopLogicIconName.Save]: SaveIcon,
  [ChopLogicIconName.Show]: ShowIcon,
  [ChopLogicIconName.Upload]: UploadIcon,
  [ChopLogicIconName.Warning]: WarningIcon,
  [ChopLogicIconName.Remove]: RemoveIcon,
};

const ChopLogicIcon: React.FC<ChopLogicIconProps> = ({ name, ...rest }) => {
  if (!name) return null;

  const fallback = (
    <span style={{ fontSize: '1rem' }} aria-label='SVG Icon Fallback'>
      &#10060;
    </span>
  );
  const Component = ChopLogicIconDictionary[name];

  return (
    <Suspense fallback={fallback}>
      <Component {...rest} />
    </Suspense>
  );
};

export default ChopLogicIcon;
