import ArrowDownIcon from './svg/ArrowDownIcon.tsx';
import ArrowUpIcon from './svg/ArrowUpIcon.tsx';
import BackIcon from './svg/BackIcon.tsx';
import CancelIcon from './svg/CancelIcon.tsx';
import CheckboxCheckedIcon from './svg/CheckboxCheckedIcon.tsx';
import CheckboxUncheckedIcon from './svg/CheckboxUncheckedIcon.tsx';
import CheckMarkIcon from './svg/CheckMarkIcon.tsx';
import ChevronDownIcon from './svg/ChevronDownIcon.tsx';
import ChevronLeftIcon from './svg/ChevronLeftIcon.tsx';
import ChevronRightIcon from './svg/ChevronRightIcon.tsx';
import ChevronUpIcon from './svg/ChevronUpIcon.tsx';
import ClearIcon from './svg/ClearIcon.tsx';
import CopyIcon from './svg/CopyIcon.tsx';
import CutIcon from './svg/CutIcon.tsx';
import DeleteIcon from './svg/DeleteIcon.tsx';
import DownloadIcon from './svg/DownloadIcon.tsx';
import ErrorIcon from './svg/ErrorIcon.tsx';
import ForwardIcon from './svg/ForwardIcon.tsx';
import GraduateIcon from './svg/GraduateIcon.tsx';
import HelpIcon from './svg/HelpIcon.tsx';
import HideIcon from './svg/HideIcon.tsx';
import HomeIcon from './svg/HomeIcon.tsx';
import InfoIcon from './svg/InfoIcon.tsx';
import LoginIcon from './svg/LoginIcon.tsx';
import PasteIcon from './svg/PasteIcon.tsx';
import QuestionIcon from './svg/QuestionIcon.tsx';
import RemoveIcon from './svg/RemoveIcon.tsx';
import SaveIcon from './svg/SaveIcon.tsx';
import ShowIcon from './svg/ShowIcon.tsx';
import UploadIcon from './svg/UploadIcon.tsx';
import WarningIcon from './svg/WarningIcon.tsx';
import { ChopLogicSVGElementProps } from '@models';
import { ReactElement } from 'react';
import { ChopLogicIconName } from '@enums';

type ChopLogicIcons = { [key in ChopLogicIconName]: ({ title, ...rest }: ChopLogicSVGElementProps) => ReactElement };

export const ChopLogicIconDictionary: ChopLogicIcons = {
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
