import { PropsWithChildren } from '../../../node_modules/react';
import { ChopLogicComponentProps } from '../common.ts';

export interface ChopLogicDialogProps extends ChopLogicComponentProps, PropsWithChildren {
    isOpened: boolean;
    onClose: () => void;
    title: string;
}
