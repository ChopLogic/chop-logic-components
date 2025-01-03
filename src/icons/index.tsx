import React, { lazy } from 'react';

import { ChopLogicIconName } from '@/enums';

const ArrowDownIcon = lazy(() => import('./svg/ArrowDownIcon.tsx'));
const ArrowUpIcon = lazy(() => import('./svg/ArrowUpIcon.tsx'));
const BackIcon = lazy(() => import('./svg/BackIcon.tsx'));
const CancelIcon = lazy(() => import('./svg/CancelIcon.tsx'));
const CheckboxCheckedIcon = lazy(() => import('./svg/CheckboxCheckedIcon.tsx'));
const CheckboxUncheckedIcon = lazy(() => import('./svg/CheckboxUncheckedIcon.tsx'));
const CheckMarkIcon = lazy(() => import('./svg/CheckMarkIcon.tsx'));
const ChevronDownIcon = lazy(() => import('./svg/ChevronDownIcon.tsx'));
const ChevronLeftIcon = lazy(() => import('./svg/ChevronLeftIcon.tsx'));
const ChevronRightIcon = lazy(() => import('./svg/ChevronRightIcon.tsx'));
const ChevronUpIcon = lazy(() => import('./svg/ChevronUpIcon.tsx'));
const ClearIcon = lazy(() => import('./svg/ClearIcon.tsx'));
const CopyIcon = lazy(() => import('./svg/CopyIcon.tsx'));
const CutIcon = lazy(() => import('./svg/CutIcon.tsx'));
const DeleteIcon = lazy(() => import('./svg/DeleteIcon.tsx'));
const DownloadIcon = lazy(() => import('./svg/DownloadIcon.tsx'));
const ErrorIcon = lazy(() => import('./svg/ErrorIcon.tsx'));
const ForwardIcon = lazy(() => import('./svg/ForwardIcon.tsx'));
const GraduateIcon = lazy(() => import('./svg/GraduateIcon.tsx'));
const HelpIcon = lazy(() => import('./svg/HelpIcon.tsx'));
const HideIcon = lazy(() => import('./svg/HideIcon.tsx'));
const HomeIcon = lazy(() => import('./svg/HomeIcon.tsx'));
const InfoIcon = lazy(() => import('./svg/InfoIcon.tsx'));
const LoginIcon = lazy(() => import('./svg/LoginIcon.tsx'));
const PasteIcon = lazy(() => import('./svg/PasteIcon.tsx'));
const QuestionIcon = lazy(() => import('./svg/QuestionIcon.tsx'));
const RemoveIcon = lazy(() => import('./svg/RemoveIcon.tsx'));
const SaveIcon = lazy(() => import('./svg/SaveIcon.tsx'));
const ShowIcon = lazy(() => import('./svg/ShowIcon.tsx'));
const UploadIcon = lazy(() => import('./svg/UploadIcon.tsx'));
const WarningIcon = lazy(() => import('./svg/WarningIcon.tsx'));

type LazyIcon = React.LazyExoticComponent<(props: React.SVGProps<SVGSVGElement>) => React.ReactElement>;

type ChopLogicLazyIcons = { [key in ChopLogicIconName]: LazyIcon };

export const ChopLogicIconDictionary: ChopLogicLazyIcons = {
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
  [ChopLogicIconName.Graduate]: GraduateIcon,
  [ChopLogicIconName.Help]: HelpIcon,
  [ChopLogicIconName.Hide]: HideIcon,
  [ChopLogicIconName.Home]: HomeIcon,
  [ChopLogicIconName.Info]: InfoIcon,
  [ChopLogicIconName.Login]: LoginIcon,
  [ChopLogicIconName.Paste]: PasteIcon,
  [ChopLogicIconName.Question]: QuestionIcon,
  [ChopLogicIconName.Save]: SaveIcon,
  [ChopLogicIconName.Show]: ShowIcon,
  [ChopLogicIconName.Upload]: UploadIcon,
  [ChopLogicIconName.Warning]: WarningIcon,
  [ChopLogicIconName.Remove]: RemoveIcon,
};
