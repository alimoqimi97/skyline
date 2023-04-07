import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import { IChatroom } from "@Interfaces";
import { Sidebar } from "@Components/Sidebar";
import { Chatbox } from "@Components/Chatbox";
import styles from "./styles.module.scss";

const Chatroom: NextPage<IChatroom.IProps, IChatroom.InitialProps> = () => {
    return (
        <div className={styles.chatroom}>
            <div className={styles.container}>
                <Sidebar />
                <Chatbox />
            </div>
        </div>
    );
};

Chatroom.getInitialProps = async (): Promise<IChatroom.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Chatroom);

export default Extended;
