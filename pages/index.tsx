// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
// #endregion Global Imports
// import "../global.css";

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Heading, LocaleButton } from "@Components";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage } from "@Interfaces";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    t,
    i18n,
}) => {
    // const home = useSelector((state: IStore) => state.home);
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
        <h1 className="text-3xl text-red-700 font-bold underline bg-red-500">
            Hello world!
        </h1>
    );
};

Home.getInitialProps = async (): // ctx: ReduxNextPageContext
Promise<IHomePage.InitialProps> => {
    // await ctx.store.dispatch(
    //     HomeActions.GetApod({
    //         params: { hd: true },
    //     })
    // );
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
