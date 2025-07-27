import { ChopLogicSelectValue } from '../models';
import { KeyboardEvent } from '../../node_modules/react';
export declare function handleDropdownListKeyPress({ e, options, onClose, }: {
    e: KeyboardEvent<HTMLUListElement>;
    options: ChopLogicSelectValue[];
    onClose: () => void;
}): void;
