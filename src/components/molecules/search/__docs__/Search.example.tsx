import styles from '@__docs__/styles/Container.module.scss';
import { Header } from '@components/atoms';
import wrapperStyles from '@styles/storybook/ResponsiveWrapper.module.scss';
import type { SearchProps } from '@types';
import { type FC, useState } from 'react';
import Search from '../Search';

export const SearchExample: FC<SearchProps> = ({ onSearch, ...rest }) => {
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  const handleSearch = (term: string) => {
    setSearchTerms((prevTerms) => [term, ...prevTerms]);
    onSearch?.(term);
  };

  const handleClear = () => {
    setSearchTerms([]);
  };

  return (
    <div
      className={wrapperStyles.responsiveWrapper}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
    >
      <Search {...rest} onSearch={handleSearch} onClear={handleClear} />
      {searchTerms.length > 0 && (
        <div className={styles.container} style={{ margin: 0 }}>
          <Header as="h5">You searched for: </Header>
          {searchTerms.map((term) => (
            <div key={term}>{term}</div>
          ))}
        </div>
      )}
    </div>
  );
};
