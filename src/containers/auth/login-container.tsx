import { FC, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { BaseButton, BaseInput } from "@Components/Basic";
import Cookies from "js-cookie";
import { supabase } from "lib/supabaseClient";
import styles from "./styles.module.scss";

const LoginContainer: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handleLogin = async () => {
        setIsLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            Cookies.set("token", data?.session?.access_token ?? "", {
                expires: (data?.session?.expires_in ?? 60) / (3600 * 24),
            });
            Cookies.set("user_id", data?.session?.user?.id ?? "");
            router.push("/chatroom");
        }
        setIsLoading(false);
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.formWrapper}>
                <span id={styles.logo}>Skyline</span>
                <span id={styles.title}>Login</span>
                <form onSubmit={handleLogin}>
                    <BaseInput
                        value={email}
                        required
                        onChange={(e: any) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                    <BaseInput
                        type="password"
                        placeholder="Password"
                        onChange={(evt: any) => setPassword(evt?.target?.value)}
                    />
                    <BaseButton
                        className={styles.registerButton}
                        onClick={handleLogin}
                    >
                        {!isLoading ? <>Login </> : <>Loading...</>}
                    </BaseButton>
                </form>
                <p>
                    You do not have an acount?
                    <Link href="/register">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginContainer;
