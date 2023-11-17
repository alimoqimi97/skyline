import { FC, useEffect, useState } from "react";
import { Chatbox } from "@Components/Chatbox";
import { supabase, useRealtime } from "lib/supabaseClient";
import { RealtimePostgresChangesPayload } from "@supabase/supabase-js";
import { Sidebar } from "@Components/Sidebar";
import Cookies from "js-cookie";
import { useChatroomContext } from "src/context/useChatroomContext";
import { MessageType } from "src/types.ts";
import styles from "./styles.module.scss";

const ChatroomContainer: FC = () => {
    const { setMessages } = useChatroomContext();

    useRealtime(
        (payload: RealtimePostgresChangesPayload<{ [key: string]: any }>) => {
            setMessages?.([
                payload?.old as MessageType,
                payload?.new as MessageType,
            ]);
        }
    );
    const [userId, setUserId] = useState<string>("");
    const [inboxes, setInboxes] = useState<any[]>([]);

    useEffect(() => {
        const id: string = Cookies?.get("user_id") ?? "";
        setUserId(id);
    }, []);

    const getInboxes = async () => {
        const { data } = await supabase.from("inbox_users").select();
        console.log(data);

        // setInboxes(data);
    };

    useEffect(() => {
        getInboxes();
    }, [userId]);

    return (
        <div className={styles.chatroomContainer}>
            <Sidebar />
            <Chatbox />
        </div>
    );
};

export default ChatroomContainer;
