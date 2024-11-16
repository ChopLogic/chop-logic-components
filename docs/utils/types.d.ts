import { CSSProperties } from '../../node_modules/react';

export type CommonInputProps = CommonComponentProps & {
    label: string;
    name: string;
    disabled?: boolean;
    required?: boolean;
};
export type CommonComponentProps = {
    id?: string;
    className?: string;
    style?: CSSProperties;
    tabIndex?: number;
    title?: string;
    theme?: 'dark' | 'light';
};
export type SelectValue = {
    id: string;
    label: string;
} & {
    [key in string]: unknown;
};
export interface ChopLogicTheme {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    backgroundColor: string;
    accentColor: string;
    primaryGradient: string;
    accentGradient: string;
    tintGradient: string;
    coreFontFamily: string;
    monospaceFontFamily: string;
    smallGap: string;
    mediumGap: string;
    bigGap: string;
    iconSize: string;
    blockBorderRadius: string;
    boxShadow: string;
    textShadow: string;
    insetShadow: string;
    regularBorder: string;
    accentBorder: string;
    outlineBorder: string;
    baseIndex: string;
    tooltipIndex: string;
    dropdownIndex: string;
    modalIndex: string;
}
