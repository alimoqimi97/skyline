import {
    FC,
    createContext,
    useState,
    useMemo,
    useContext,
    SetStateAction,
    Dispatch,
} from "react";

export interface IChatroomContext {
    messages: any[];
    setMessages: Dispatch<SetStateAction<any[]>>;
}

const chatRoomContextInitialValue = {
    messages: [],
    setMessages: () => {},
};

const ChatroomContext = createContext<IChatroomContext>(
    chatRoomContextInitialValue
);

const initialValue = {
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
        []
    );

    return (
        <ChatroomContext.Provider value={value}>
            {children}
        </ChatroomContext.Provider>
    );
};

export const useChatroomContext = () => useContext(ChatroomContext);
