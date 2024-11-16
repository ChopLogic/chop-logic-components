import { KeyboardEvent } from '../../node_modules/react';
import { SelectValue } from '../../../../../../../src/utils/types.ts';

export declare function handleDropdownListKeyPress({ e, options, onClose, }: {
    e: KeyboardEvent<HTMLUListElement>;
    options: SelectValue[];
    onClose: () => void;
}): void;
