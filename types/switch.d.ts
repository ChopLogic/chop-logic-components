import { IconName } from '../enums';
import { CSSProperties } from '../../node_modules/react';
export interface SwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    value?: string;
    hasIndicator?: boolean;
    icon?: IconName;
    label: string;
    name: string;
    disabled?: boolean;
    id?: string;
    className?: string;
    style?: CSSProperties;
    isLoading?: boolean;
}
