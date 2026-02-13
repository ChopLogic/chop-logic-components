import { Icon } from '@components/atoms';
import { IconName } from '@enums';
import type { MultiSelectValue } from '@types';
import { getClassName } from '@utils';
import type { FC, KeyboardEvent } from 'react';
import styles from '../select/option/Option.module.scss';

type Props = {
  value: MultiSelectValue;
  onSelect: (id: string) => void;
};

export const MultiSelectOption: FC<Props> = ({ value, onSelect }) => {
  const { id, label, selected } = value;
  const optionClass = getClassName([
    styles.option,
    styles.option__multi,
    { [styles.option__selected]: selected },
  ]);

  const handleKeyDown = (id: string) => (e: KeyboardEvent<HTMLLIElement>) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        onSelect(id);
        break;
      default:
        break;
    }
  };

  return (
    <li
      id={id}
      role="option"
      aria-selected={selected}
      tabIndex={0}
      onKeyDown={handleKeyDown(id)}
      onClick={() => onSelect(id)}
      className={optionClass}
    >
      {selected ? (
        <Icon name={IconName.CheckSquare} size="l" />
      ) : (
        <Icon name={IconName.Square} size="l" />
      )}
      <span>{label}</span>
    </li>
  );
};
