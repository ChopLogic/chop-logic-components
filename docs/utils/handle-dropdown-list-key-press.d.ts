import { KeyboardEvent } from '../../node_modules/react';
import { ChopLogicSelectValue } from '../models';
export declare function handleDropdownListKeyPress({ e, options, onClose, }: {
    e: KeyboardEvent<HTMLUListElement>;
    options: ChopLogicSelectValue[];
    onClose: () => void;
}): void;
