import { FC } from "react";
import { BaseButton } from "@Components/Basic";
import Image from "next/image";
import { supabase } from "lib/supabaseClient";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = props => {
    const router = useRouter();
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            alert(error.error_description || error.message);
        } else {
            router.push("/login");
        }
    };
    return (
        <div className={styles.Navbar} data-testid="Navbar">
            <span id={styles.logo}>Skyline</span>
            <div className={styles.user}>
                <Image
                    src="/static/images/addProfile2.jpg"
                    width={24}
                    height={24}
                    alt="avatar"
                    className="bg-nostalgiaPerfume rounded-full object-cover"
                />
                <span>John</span>
                <BaseButton onClick={handleLogout} className={styles.logout}>
                    Logout
                </BaseButton>
            </div>
        </div>
    );
};
