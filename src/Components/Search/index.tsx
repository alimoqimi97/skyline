import { BaseInput } from "@Components/Basic";
import { ChangeEvent, FC, useState } from "react";
import { supabase } from "lib/supabaseClient";
import { Contact } from "..";
import styles from "./styles.module.scss";

export interface SearchProps {}

export const Search: FC<SearchProps> = props => {
    const [username, setUsername] = useState<string>("");
    const [foundUsers, setFoundUsers] = useState<any[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event?.target?.value);
    };
    const searchUser = async () => {
        const { data, error } = await supabase
            .from("users")
            .select("email, id, first_name, last_name")
            .eq("email", username);

        if (!error) {
            setFoundUsers(data);
        } else {
            alert(error?.message);
        }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event?.code === "Enter") {
            searchUser();
        }
    };

    const handleContactClick = async (contact: { id: any }) => {
        const { data, error } = await supabase
            .from("chats")
            .select("messages")
            .eq("receiver_id", contact?.id);

        if (!error) {
            console.log(data);
        } else {
            alert(error?.message);
        }
    };

    // const users = foundUsers?.map(user => (
    //     <Contact
    //         firstName={user?.email}
    //         image="/static/images/addProfile2.jpg"
    //         onClick={() => handleContactClick(user)}
    //     />
    // ));

    console.log(foundUsers);
    

    return (
        <div className={styles.Search} data-testid="Search">
            <div className={styles.searchForm}>
                <BaseInput
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search user"
                    onKeyDown={handleKeyDown}
                    onChange={handleChange}
                />
            </div>
            {foundUsers &&
                foundUsers?.length > 0 &&
                foundUsers?.map(user => (
                    <Contact
                        fullName={user?.email}
                        image="/static/images/addProfile2.jpg"
                        onClick={() => handleContactClick(user)}
                    />
                ))}
        </div>
    );
};
