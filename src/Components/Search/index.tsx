import { BaseInput } from "@Components/Basic";
import Image from "next/image";
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
            <div className={styles.userChat}>
                <Image
                    width={50}
                    height={50}
                    src="/static/images/addProfile2.jpg"
                    alt="picture"
                    className="rounded-full object-cover"
                />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    );
};
