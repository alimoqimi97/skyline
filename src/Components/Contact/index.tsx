import { FC } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export interface ContactProps {
    fullName?: string;
    lastMessage?: string;
    image?: string | StaticImport;
    onClick?: () => void;
}

export const Contact: FC<ContactProps> = ({
    fullName,
    lastMessage,
    image,
    onClick,
}) => {
    return (
        <div className={styles.Contact} data-testid="Contact" onClick={onClick}>
            <Image
                width={50}
                height={50}
                src={image}
                alt="picture"
                className="rounded-full object-cover"
            />
            <div className={styles.userChatInfo}>
                <span>{fullName}</span>
                <p>{lastMessage}</p>
            </div>
        </div>
    );
};
