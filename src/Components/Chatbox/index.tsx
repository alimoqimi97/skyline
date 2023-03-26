import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface ChatboxProps {
}

export const Chatbox: FC<ChatboxProps> = (props) => {
    return (
        <div className={styles.Chatbox} data-testid="Chatbox">
            Chatbox
        </div>
    );
};
