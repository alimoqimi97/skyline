import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface SearchProps {
}

export const Search: FC<SearchProps> = (props) => {
    return (
        <div className={styles.Search } data-testid="Search">
            Search
        </div>
    );
};
