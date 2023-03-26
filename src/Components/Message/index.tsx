import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface MessageProps {
}

export const Message: FC<MessageProps> = (props) => {
    return (
        <div className={styles.Message } data-testid="Message">
            Message
        </div>
    );
};
