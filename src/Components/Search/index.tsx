import { BaseInput } from "@Components/Basic";
import React, { FC } from "react";
import styles from "./styles.module.scss";

export interface SearchProps {}

export const Search: FC<SearchProps> = props => {
    return (
        <div className={styles.Search} data-testid="Search">
            <div className={styles.searchForm}>
                <BaseInput
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search user"
                />
            </div>
        </div>
    );
};
