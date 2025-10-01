import { Header } from '@atoms';
import { SearchProps } from '@models';
import styles from '@styles/storybook/Container.module.scss';
import { FC, useState } from 'react';

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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Search {...rest} onSearch={handleSearch} onClear={handleClear} style={{ width: '240px' }} />
      {searchTerms.length > 0 && (
        <div className={styles.container} style={{ margin: 0 }}>
          <Header as='h5'>You searched for: </Header>
          {searchTerms.map((term, index) => (
            <div key={index}>{term}</div>
          ))}
        </div>
      )}
    </div>
  );
};
