import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface ChatsProps {
}

export const Chats: FC<ChatsProps> = (props) => {
    return (
        <div className={styles.Chats } data-testid="Chats">
            Chats
        </div>
    );
};
