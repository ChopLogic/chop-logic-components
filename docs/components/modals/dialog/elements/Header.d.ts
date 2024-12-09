import { default as React } from '../../../../../node_modules/react';
import { ChopLogicTheme } from '../../../../types';

declare const ChopLogicModalLayoutHeader: React.FC<{
    title: string;
    onClose: () => void;
    theme: ChopLogicTheme;
}>;
export default ChopLogicModalLayoutHeader;
