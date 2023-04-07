import { FC } from "react";
import { Message } from "..";
import styles from "./styles.module.scss";

export interface MessagesProps {}

export const Messages: FC<MessagesProps> = props => {
    return (
        <div className={styles.Messages} data-testid="Messages">
            <Message isOwner />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
};
