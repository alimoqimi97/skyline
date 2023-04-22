import { FC, createContext, useState, useMemo, useContext } from "react";

export interface IChatroomContext {}

const chatRoomContextInitialValue = {};

const ChatroomContext = createContext<IChatroomContext>(
    chatRoomContextInitialValue
);

const initialValue = {};

export const ChatRoomProvider: FC = ({ children }) => {
    const [state, setState] = useState<IChatroomContext | null>(initialValue);

    const value = useMemo(
        () => ({
            ...state,
        }),
        []
    );

    return (
        <ChatroomContext.Provider value={value}>
            {children}
        </ChatroomContext.Provider>
    );
};

export const useChatroomContext = () => useContext(ChatroomContext);
