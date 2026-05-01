import { IconName } from '../enums';
import { PropsWithChildren } from '../../node_modules/react';
import { ChopLogicComponentProps } from './_common';
export interface DialogProps extends ChopLogicComponentProps, PropsWithChildren {
    isOpened: boolean;
    onClose: () => void;
    title: string;
    icon?: IconName;
}
