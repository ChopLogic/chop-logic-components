import { ChopLogicComponentProps } from '../../models';
import { FC } from '../../../node_modules/react';
interface ReadViewProps extends ChopLogicComponentProps {
    value: string;
    placeholder: string;
    onClick: (event: React.MouseEvent) => void;
    className: string;
}
export declare const ReadView: FC<ReadViewProps>;
export {};
