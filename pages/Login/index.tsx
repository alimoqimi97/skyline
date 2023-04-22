import { NextPage } from "next";
import Link from "next/link";
import { withTranslation } from "@Server/i18n";
import { ILogin, ReduxNextPageContext } from "@Interfaces";
import { BaseButton, BaseInput } from "@Components/Basic";
import { useState } from "react";
import { supabase } from "lib/supabaseClient";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import styles from "./styles.module.scss";

const Login: NextPage<ILogin.IProps, ILogin.InitialProps> = ({
    // t,
    i18n,
}) => {
    // const Login = useSelector((state: IStore) => state.Login);
    // const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    const handleLogin = async event => {
        event.preventDefault();

        setIsLoading(true);
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            Cookies.set("token", data?.session?.access_token, {
                expires: (data?.session?.expires_in ?? 60) / (3600 * 24),
            });
            Cookies.set("user_id", data?.session?.user?.id);
            router.push("/chatroom");
        }
        setIsLoading(false);
    };

    return (
        <div className={styles.login}>
            <div className={styles.formWrapper}>
                <span id={styles.logo}>Skyline</span>
                <span id={styles.title}>Login</span>
                <form onSubmit={handleLogin}>
                    <BaseInput
                        value={email}
                        required
                        onChange={e => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                    />
                    <BaseInput
                        type="password"
                        placeholder="Password"
                        onChange={evt => setPassword(evt?.target?.value)}
                    />
                    <BaseButton className={styles.registerButton} type="submit">
                        {!isLoading ? <>Login </> : <>Loading...</>}
                    </BaseButton>
                </form>
                <p>
                    You do not have an acount? {"  "}
                    <Link href="/register">Register</Link>{" "}
                </p>
            </div>
        </div>
    );
};

Login.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<ILogin.InitialProps> => {
    // await ctx.store.dispatch(
    //     LoginActions.GetApod({
    //         params: { hd: true },
    //     })
    // );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Login);

export default Extended;
