import * as React from "react";
import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import { Heading, LocaleButton } from "@Components";
import { IRegister, ReduxNextPageContext } from "@Interfaces";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

const Register: NextPage<IRegister.IProps, IRegister.InitialProps> = ({
    // t,
    i18n,
}) => {
    // const register = useSelector((state: IStore) => state.register);
    // const dispatch = useDispatch();

    const renderLocaleButtons = (activeLanguage: string) =>
        ["en", "es", "tr"].map(lang => (
            <LocaleButton
                key={lang}
                lang={lang}
                isActive={activeLanguage === lang}
                onClick={() => i18n.changeLanguage(lang)}
            />
        ));

    return (
        <div className={styles.register}>
            {renderLocaleButtons(i18n.language)}
            <div className={styles.formWrapper}>
                <span id={styles.logo}>Skyline</span>
                <span id={styles.title}>Register</span>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="file" id={styles.file} />
                    <label htmlFor={styles.file}>
                        <Image
                            src="/static/images/addProfile2.jpg"
                            alt="add-profile-picture"
                            width={20}
                            height={20}
                        />
                    </label>
                    <button type="submit">Sign up</button>
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
