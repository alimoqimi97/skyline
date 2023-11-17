import { FC, createContext, useState, useMemo, useContext } from "react";
import { MessageType } from "src/types.ts";

export interface IChatroomContext {
    messages?: MessageType[];
    setMessages?: (messages: MessageType[]) => void;
}

const chatRoomContextInitialValue = {
    messages: [],
    setMessages: () => {},
};

const ChatroomContext = createContext<IChatroomContext>(
    chatRoomContextInitialValue
);

const initialValue: IChatroomContext = {
    messages: [],
    setMessages: () => {},
};

export const ChatRoomProvider: FC = ({ children }) => {
    const [state, setState] = useState<IChatroomContext | null>(initialValue);

    const setMessages = (messages: any[]) => {
        const newState: IChatroomContext = {
            ...state,
            messages,
        };
        setState(newState);
    };

    const value = useMemo(
        () => ({
            ...state,
            setMessages,
        }),
        [state]
    );

    return (
        <ChatroomContext.Provider value={value}>
            {children}
        </ChatroomContext.Provider>
    );
};

export const useChatroomContext = () => useContext(ChatroomContext);
