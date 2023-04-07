// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { Auth } from "@supabase/auth-ui-react";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { HomeActions } from "@Actions";
import { Chatbox, Heading, LocaleButton, Sidebar } from "@Components";
import { IHomePage } from "@Interfaces";
import styles from "./styles.module.scss";
// #endregion Local Imports

// #region Interface Imports
import { supabase } from "../lib/supabaseClient";
// #endregion Interface Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    // t,
    i18n,
}) => {
    // const home = useSelector((state: IStore) => state.home);
    // const dispatch = useDispatch();

    React.useEffect(() => {
        async function fetchData() {
            let { data, error } = await supabase.from("Users").select();

            console.log(data);
        }
        fetchData();
    });

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
        <div className={styles.home}>
           
        </div>
    );
};

Home.getInitialProps = async (): // ctx: ReduxNextPageContext
Promise<IHomePage.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

// export async function getServerSideProps() {
//     const { data } = await supabase.from("Users").select();

//     console.log(data);

//     return {
//         props: {
//             users: data,
//         },
//     };
// }

const Extended = withTranslation("common")(Home);

export default Extended;
