import { FC } from "react";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import { Input, Messages } from "..";
import styles from "./styles.module.scss";

export interface ChatboxProps {}

export const Chatbox: FC<ChatboxProps> = () => {
    return (
        <div className={styles.Chatbox} data-testid="Chatbox">
            <div className={styles.chatInfo}>
                <span>Jane</span>
                <div className={styles.chatIcons}>
                    <BsFillCameraVideoFill />
                    <AiOutlinePlus />
                    <FiMoreHorizontal />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    );
};
