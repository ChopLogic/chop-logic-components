import { PropsWithChildren } from '../../../../node_modules/react';
import { CommonComponentProps } from '../../../../../../../../../src/utils/types';

export type ChopLogicDialogProps = CommonComponentProps & PropsWithChildren & {
    isOpened: boolean;
    onClose: () => void;
    title: string;
};
export type DialogLayoutProps = PropsWithChildren & React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClose: () => void;
    isOpened: boolean;
};
