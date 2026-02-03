import {
  ArrowDownIcon,
  ArrowUpIcon,
  BackIcon,
  CancelIcon,
  CheckboxCheckedIcon,
  CheckboxUncheckedIcon,
  CheckMarkIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChopLogicIcon,
  ClearIcon,
  CopyIcon,
  CutIcon,
  DeleteIcon,
  DocumentsIcon,
  DownloadIcon,
  EditIcon,
  EmailIcon,
  ErrorIcon,
  ForwardIcon,
  GraduateIcon,
  HelpIcon,
  HideIcon,
  HomeIcon,
  ImageIcon,
  InfoIcon,
  LoginIcon,
  PasteIcon,
  PhoneIcon,
  PlusCircleIcon,
  ProjectsIcon,
  QuestionIcon,
  RemoveIcon,
  SaveIcon,
  SearchIcon,
  SettingsIcon,
  ShowIcon,
  UploadIcon,
  WarningIcon,
} from '@assets/icons';
import { IconName } from '@enums';
import type { ChopLogicSVGElementProps, IconProps } from '@types';
import { getClassName } from '@utils';
import type { FC, ReactElement } from 'react';
import styles from './Icon.module.scss';

type Icons = {
  [key in IconName]: ({ title, ...rest }: Readonly<ChopLogicSVGElementProps>) => ReactElement;
};

export const IconDictionary: Icons = {
  [IconName.ArrowDown]: ArrowDownIcon,
  [IconName.ArrowUp]: ArrowUpIcon,
  [IconName.Back]: BackIcon,
  [IconName.Cancel]: CancelIcon,
  [IconName.CheckboxChecked]: CheckboxCheckedIcon,
  [IconName.CheckboxUnchecked]: CheckboxUncheckedIcon,
  [IconName.CheckMark]: CheckMarkIcon,
  [IconName.ChevronDown]: ChevronDownIcon,
  [IconName.ChevronUp]: ChevronUpIcon,
  [IconName.ChevronLeft]: ChevronLeftIcon,
  [IconName.ChevronRight]: ChevronRightIcon,
  [IconName.ChopLogic]: ChopLogicIcon,
  [IconName.Clear]: ClearIcon,
  [IconName.Copy]: CopyIcon,
  [IconName.Cut]: CutIcon,
  [IconName.Delete]: DeleteIcon,
  [IconName.Documents]: DocumentsIcon,
  [IconName.Download]: DownloadIcon,
  [IconName.Edit]: EditIcon,
  [IconName.Email]: EmailIcon,
  [IconName.Error]: ErrorIcon,
  [IconName.Forward]: ForwardIcon,
  [IconName.Graduate]: GraduateIcon,
  [IconName.Help]: HelpIcon,
  [IconName.Hide]: HideIcon,
  [IconName.Home]: HomeIcon,
  [IconName.Image]: ImageIcon,
  [IconName.Info]: InfoIcon,
  [IconName.Login]: LoginIcon,
  [IconName.Paste]: PasteIcon,
  [IconName.Phone]: PhoneIcon,
  [IconName.PlusCircle]: PlusCircleIcon,
  [IconName.Projects]: ProjectsIcon,
  [IconName.Question]: QuestionIcon,
  [IconName.Save]: SaveIcon,
  [IconName.Search]: SearchIcon,
  [IconName.Settings]: SettingsIcon,
  [IconName.Show]: ShowIcon,
  [IconName.Upload]: UploadIcon,
  [IconName.Warning]: WarningIcon,
  [IconName.Remove]: RemoveIcon,
};

const Icon: FC<IconProps> = ({ name, testId, className, hidden, ...rest }) => {
  if (!name) return null;
  const Component = IconDictionary[name];
  const iconClass = getClassName([className, styles.icon]);

  return <Component data-testid={testId} className={iconClass} aria-hidden={hidden} {...rest} />;
};

export default Icon;
