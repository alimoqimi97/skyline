import * as React from "react";
import { NextPage } from "next";
// import { useSelector, useDispatch } from "react-redux";

import { withTranslation } from "@Server/i18n";
// import { IStore } from "@Redux/IStore";
// import { RegisterActions } from "@Actions";
import { Heading, LocaleButton } from "@Components";

import { IRegister, ReduxNextPageContext } from "@Interfaces";
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
                <span id="logi">Skyline</span>
                <span id="title">Register</span>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="file" />
                    <button>Sign up</button>
                </form>
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
