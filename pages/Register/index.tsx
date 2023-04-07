import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import { IRegister, ReduxNextPageContext } from "@Interfaces";
import Link from "next/link";
import Image from "next/image";
import { BaseButton, BaseInput } from "@Components/Basic";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { supabase } from "lib/supabaseClient";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

const Register: NextPage<IRegister.IProps, IRegister.InitialProps> = ({
    // t,
    i18n,
}) => {
    // const register = useSelector((state: IStore) => state.register);
    // const dispatch = useDispatch();
    const [email, setEmail] = useState(""); // email of the user
    const [password, setPassword] = useState(""); // password of the user
    const [phone, setPhone] = useState("");
    const router = useRouter();

    const handleSubmit = async (event: SyntheticEvent) => {
        event?.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            phone,
        });
        if (error) {
            console.error(error?.message);
        } else {
            console.log("User created successfully");
            router.push("/chatroom");
        }
    };

    return (
        <div className={styles.register}>
            <div className={styles.formWrapper}>
                <span id={styles.logo}>Skyline</span>
                <span id={styles.title}>Register</span>
                <form onSubmit={handleSubmit}>
                    <BaseInput
                        type="text"
                        placeholder="Phone Number"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPhone(e.target.value)
                        }
                    />
                    <BaseInput
                        type="email"
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <BaseInput
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor={styles.file}>
                        <input type="file" id={styles.file} />
                        <Image
                            src="/static/images/addProfile2.jpg"
                            alt="add-profile-picture"
                            width={20}
                            height={20}
                        />
                        Add profile picture.
                    </label>
                    <BaseButton className={styles.registerButton} type="submit">
                        Sign up{" "}
                    </BaseButton>
                </form>
                <p>
                    You do have an acount? {"  "}
                    <Link href="/login">Login</Link>{" "}
                </p>
            </div>
        </div>
    );
};

Register.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<IRegister.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Register);

export default Extended;
