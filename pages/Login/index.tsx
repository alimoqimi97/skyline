import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";

import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
// import { LoginActions } from "@Actions";
import { Heading, LocaleButton } from "@Components";

import { ILogin, ReduxNextPageContext } from "@Interfaces";

const Login: NextPage<ILogin.IProps, ILogin.InitialProps> = ({ t, i18n }) => {
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

    return <div>{renderLocaleButtons(i18n.language)}</div>;
};

Login.getInitialProps = async (
    ctx: ReduxNextPageContext
): Promise<ILogin.InitialProps> => {
    await ctx.store.dispatch(
        LoginActions.GetApod({
            params: { hd: true },
        })
    );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Login);

export default Extended;
