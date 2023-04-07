import { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export interface ChatsProps {}

export const Chats: FC<ChatsProps> = props => {
    return (
        <div className={styles.Chats} data-testid="Chats">
            <div className={styles.userChat}>
                <Image
                    width={50}
                    height={50}
                    src="/static/images/addProfile2.jpg"
                    alt="picture"
                    className="rounded-full object-cover"
                />
                <div className={styles.userChatInfo}>
                    <span>Jane</span>
                    <p>Due</p>
                </div>
            </div>
            <div className={styles.userChat}>
                <Image
                    width={50}
                    height={50}
                    src="/static/images/addProfile2.jpg"
                    alt="picture"
                    className="rounded-full object-cover"
                />
                <div className={styles.userChatInfo}>
                    <span>Jane</span>
                    <p>Due</p>
                </div>
            </div>
            <div className={styles.userChat}>
                <Image
                    width={50}
                    height={50}
                    src="/static/images/addProfile2.jpg"
                    alt="picture"
                    className="rounded-full object-cover"
                />
                <div className={styles.userChatInfo}>
                    <span>Jane</span>
                    <p>Due</p>
                </div>
            </div>
        </div>
    );
};
