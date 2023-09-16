import { FC } from "react";
import { Chatbox } from "@Components/Chatbox";
import { Sidebar } from "@Components/Sidebar";
import styles from "./styles.module.scss";

const ChatroomContainer: FC = () => {
    return (
        <div className={styles.chatroomContainer}>
            <Sidebar />
            <Chatbox />
        </div>
    );
};

export default ChatroomContainer;
