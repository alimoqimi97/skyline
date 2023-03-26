import * as React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
// import { useSelector, useDispatch } from "react-redux";

import { withTranslation } from "@Server/i18n";
// import { IStore } from "@Redux/IStore";
// import { LoginActions } from "@Actions";
import { Heading, LocaleButton } from "@Components";

import { ILogin, ReduxNextPageContext } from "@Interfaces";
import { BaseButton, BaseInput } from "@Components/Basic";
import styles from "./styles.module.scss";

const Login: NextPage<ILogin.IProps, ILogin.InitialProps> = ({
    // t,
    i18n,
}) => {
    // const Login = useSelector((state: IStore) => state.Login);
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
        <div className={styles.login}>
            {renderLocaleButtons(i18n.language)}
            <div className={styles.formWrapper}>
                <span id={styles.logo}>Skyline</span>
                <span id={styles.title}>Register</span>
                <form>
                    <BaseInput type="email" placeholder="Email" />
                    <BaseInput type="password" placeholder="Password" />
                    <BaseButton className={styles.registerButton} type="submit">
                        Login{" "}
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
