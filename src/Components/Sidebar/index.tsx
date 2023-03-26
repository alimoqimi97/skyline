import React, { FC } from "react";
import { Navbar, Search } from "..";
import styles from "./styles.module.scss";

export interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = props => {
    return (
        <div className={styles.Sidebar} data-testid="Sidebar">
            <Navbar />
            <Search />
        </div>
    );
};
