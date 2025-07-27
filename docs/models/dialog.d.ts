import { ChopLogicIconName } from '../enums';
import { PropsWithChildren } from '../../node_modules/react';
import { ChopLogicComponentProps } from './_common';
export interface ChopLogicDialogProps extends ChopLogicComponentProps, PropsWithChildren {
    isOpened: boolean;
    onClose: () => void;
    title: string;
    icon?: ChopLogicIconName;
}
