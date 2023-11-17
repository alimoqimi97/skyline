import { FC, ReactNode } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export interface MessageProps {
    isOwner?: boolean;
    children?: ReactNode;
}

export const Message: FC<MessageProps> = ({ isOwner, children }) => {
    return (
        <div
            className={`${styles.Message} ${isOwner ? styles.owner : ""}`}
            data-testid="Message"
        >
            <div id={styles.info}>
                <Image
                    className={styles.avatar}
                    width={40}
                    height={40}
                    src="/static/images/addProfile2.jpg"
                    alt="avatar"
                />
                <span>Just now</span>
            </div>
            <div id={styles.content}>
                <p>{children}</p>
                {/* <Image
                    width={40}
                    height={40}
                    src="/static/images/addProfile2.jpg"
                    alt=""
                /> */}
            </div>
        </div>
    );
};
