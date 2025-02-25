import { ChopLogicIconName } from '../../enums';
import { ChopLogicComponentProps } from '../common.ts';
import { default as React } from '../../../node_modules/react';
export interface ChopLogicIconProps extends ChopLogicComponentProps {
    name?: ChopLogicIconName;
    testId?: string;
    title?: string;
}
export interface ChopLogicSVGElementProps extends React.SVGProps<SVGSVGElement> {
    title?: string;
}
