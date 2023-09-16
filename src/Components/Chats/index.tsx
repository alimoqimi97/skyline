import { FC, useEffect, useState } from "react";
import { supabase } from "lib/supabaseClient";
import { useChatroomContext } from "src/context/useChatroomContext";
import { Contact } from "..";
import styles from "./styles.module.scss";

export interface ChatsProps {}

export const Chats: FC<ChatsProps> = props => {
    const [chats, setChats] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { setMessages } = useChatroomContext();

    useEffect(() => {
        const fetchChats = async () => {
            const { data, error } = await supabase.from("inboxes").select("*");

            if (!error) {
                setChats(data);
                setIsLoading(false);
            } else {
                alert(error?.message);
            }
        };

        fetchChats();
    }, []);

    const handleContactClick = async (inboxId: string) => {
        if (!inboxId) {
            return;
        }

        const { data, error } = await supabase
            .from("messages")
            .select("*")
            ?.eq("inbox_id", inboxId);

        if (!error) {
            setMessages(data);
            setIsLoading(false);
        } else {
            alert(error?.message);
        }
    };
    return (
        <div className={styles.Chats} data-testid="Chats">
            {chats &&
                chats?.length > 0 &&
                chats?.map(
                    (chat: {
                        id?: string;
                        fullName?: string;
                        last_message?: string;
                        user_id?: string;
                        contact_id?: string;
                    }) => (
                        <Contact
                            fullName={chat?.fullName}
                            lastMessage={chat?.last_message}
                            image="/static/images/addProfile2.jpg"
                            onClick={() => handleContactClick(chat?.id ?? "")}
                        />
                    )
                )}
            {/* <Contact
                fullName="Jane"
                lastMessage="Hello World!"
                image="/static/images/addProfile2.jpg"
            />
            <Contact
                fullName="Jane"
                lastMessage="Hello World!"
                image="/static/images/addProfile2.jpg"
            />
            <Contact
                fullName="Jane"
                lastMessage="Hello World!"
                image="/static/images/addProfile2.jpg"
            /> */}
        </div>
    );
};
