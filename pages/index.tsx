// #region Global Imports
import * as React from "react";
import { NextPage } from "next";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IHomePage } from "@Interfaces";
import styles from "./styles.module.scss";
// #endregion Local Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = ({
    // t,
    // i18n,
}) => {
    return <div className={styles.home}></div>;
};

Home.getInitialProps = async (): Promise<IHomePage.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
