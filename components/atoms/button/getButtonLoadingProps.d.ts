import { IconName } from '../../../enums';
import { MouseEvent } from '../../../../node_modules/react';
interface ButtonLoadingParams {
    baseClass: string;
    iconBaseClass: string;
    className?: string;
    isLoading?: boolean;
    icon?: IconName;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
interface ButtonLoadingProps {
    buttonClass: string;
    iconClass: string;
    displayIcon: IconName | undefined;
    handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
export declare const getButtonLoadingProps: ({ baseClass, iconBaseClass, className, icon, onClick, isLoading, }: ButtonLoadingParams) => ButtonLoadingProps;
export {};
