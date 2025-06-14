import { default as React } from '../../../node_modules/react';
import { ChopLogicAlertMode, ChopLogicIconName } from '../../enums';
export declare function getAlertTitle(mode: ChopLogicAlertMode, title?: string): string;
export declare function renderAlertIcon(mode: ChopLogicAlertMode, icon?: ChopLogicIconName): React.ReactElement | null;
