import { FC, useState, useEffect } from "react";
import { useChatroomContext } from "src/context/useChatroomContext";
import { supabase } from "lib/supabaseClient";
import { Message } from "..";
import styles from "./styles.module.scss";

export const Messages: FC = () => {
    const { messages } = useChatroomContext();
    const [messagesTexts, setMessagesTexts] = useState<string[]>([]);

    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from("messages")
            .select("message")
            .eq("inbox_id", "1");

        const texts: string[] = data?.map(item => item?.message) ?? [];
        setMessagesTexts(texts);

        if (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, [messages]);

    const messagesList = messagesTexts?.map(
        (message: string, index: number) => (
            <Message isOwner={index % 2 === 0}>{message}</Message>
        )
    );

    return (
        <div className={styles.Messages} data-testid="Messages">
            {messagesList}
        </div>
    );
};
