import { FC } from "react";
import { BaseButton, BaseInput } from "@Components/Basic";
import { IoIosAttach } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import { RiSendPlane2Fill } from "react-icons/ri";
import styles from "./styles.module.scss";

export interface InputProps {}

export const Input: FC<InputProps> = props => {
    return (
        <div className={styles.Input} data-testid="Input">
            <BaseInput
                className={styles.messageInput}
                type="text"
                placeholder="Type something..."
            />
            <div className={styles.sendBox}>
                <IoIosAttach />
                <BaseInput type="file" className="hidden" id="file" />
                <label htmlFor="file">
                    <AiOutlinePicture />
                </label>
                <BaseButton className={styles.send}>
                    <RiSendPlane2Fill />
                </BaseButton>
            </div>
        </div>
    );
};
