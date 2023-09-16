import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import { IChatroom } from "@Interfaces";
import dynamic from "next/dynamic";
import { ChatRoomProvider } from "src/context/useChatroomContext";
import { Loading } from "@Components/Loading";
import styles from "./styles.module.scss";

const ChatRoomContainer = dynamic(
    () => import("src/containers/chatroom/chatroom-container"),
    {
        loading: () => <Loading />,
        ssr: false,
    }
);

const Chatroom: NextPage<IChatroom.IProps, IChatroom.InitialProps> = () => {
    return (
        <ChatRoomProvider>
            <div className={styles.chatroom}>
                <ChatRoomContainer />
            </div>
        </ChatRoomProvider>
    );
};

Chatroom.getInitialProps = async (): Promise<IChatroom.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Chatroom);

export default Extended;
