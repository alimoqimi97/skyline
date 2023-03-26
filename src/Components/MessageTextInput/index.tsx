import React, { FC } from 'react';
import styles from './styles.module.scss';

export interface MessageTextInputProps {
}

export const MessageTextInput: FC<MessageTextInputProps> = (props) => {
    return (
        <div className={styles.MessageTextInput } data-testid="MessageTextInput">
            MessageTextInput
        </div>
    );
};
