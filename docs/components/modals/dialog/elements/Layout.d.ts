import { default as React, HTMLAttributes, PropsWithChildren } from '../../../../../node_modules/react';
import { ChopLogicTheme } from '../../../../models';

type DialogLayoutProps = PropsWithChildren & HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClose: () => void;
    isOpened: boolean;
    theme: ChopLogicTheme;
};
declare const ChopLogicModalLayout: React.FC<DialogLayoutProps>;
export default ChopLogicModalLayout;
