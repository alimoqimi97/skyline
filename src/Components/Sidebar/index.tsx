import React, { FC } from "react";
import { Navbar } from "..";
import styles from "./styles.module.scss";

export interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = props => {
    return (
        <div className={styles.Sidebar} data-testid="Sidebar">
            <Navbar />
        </div>
    );
};
