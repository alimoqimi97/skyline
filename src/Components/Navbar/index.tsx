import { BaseButton } from "@Components/Basic";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./styles.module.scss";

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = props => {
    return (
        <div className={styles.Navbar} data-testid="Navbar">
            <span id={styles.logo}>Skyline</span>
            <div className={styles.user}>
                <Image
                    src="/static/images/addProfile2.jpg"
                    width={24}
                    height={24}
                    alt="avatar"
                    className="bg-nostalgiaPerfume rounded-full object-cover"
                />
                <span>John</span>
                <BaseButton className={styles.logout}>Logout</BaseButton>
            </div>
        </div>
    );
};
