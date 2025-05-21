import { default as React, HTMLAttributes, PropsWithChildren } from '../../../../../../node_modules/react';
type DialogLayoutProps = PropsWithChildren & HTMLAttributes<HTMLDivElement> & {
    title: string;
    onClose: () => void;
    isOpened: boolean;
};
declare const ChopLogicModalLayout: React.FC<DialogLayoutProps>;
export default ChopLogicModalLayout;
