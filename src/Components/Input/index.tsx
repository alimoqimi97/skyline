import { ChangeEvent, FC, useState } from "react";
import { BaseButton, BaseInput } from "@Components/Basic";
import { IoIosAttach } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import { RiSendPlane2Fill } from "react-icons/ri";
import { supabase } from "lib/supabaseClient";
import styles from "./styles.module.scss";

export interface InputProps {}

export const Input: FC<InputProps> = () => {
    const [message, setMessage] = useState<string>("");
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event?.target?.value);
    };
    const sendMessage = async () => {
        const { error } = await supabase.from("messages").insert({
            message,
            user_id: "62e75fa1-042e-47b8-8ea0-ea0b58d4f8cb",
            type: "text",
            inbox_id: "1",
        });

        if (error) {
            console.error("error in sending message...");
        } else {
            setMessage("");
        }
    };
    return (
        <div className={styles.Input} data-testid="Input">
            <BaseInput
                className={styles.messageInput}
                onChange={handleInputChange}
                type="text"
                value={message}
                placeholder="Type something..."
            />
            <div className={styles.sendBox}>
                <IoIosAttach />
                <BaseInput type="file" className="hidden" id="file" />
                <label htmlFor="file">
                    <AiOutlinePicture />
                </label>
                <BaseButton className={styles.send} onClick={sendMessage}>
                    <RiSendPlane2Fill />
                </BaseButton>
            </div>
        </div>
    );
};
