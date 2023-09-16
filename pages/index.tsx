// #region Global Imports
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
// #endregion Global Imports

// #region Local Imports
import { withTranslation } from "@Server/i18n";
import { IHomePage } from "@Interfaces";
import { BaseButton } from "@Components/Basic";
import styles from "./styles.module.scss";
// #endregion Local Imports

const Home: NextPage<IHomePage.IProps, IHomePage.InitialProps> = () => {
    const router = useRouter();

    const goToLogin = () => {
        router.push("/login");
    };

    const gotoRegister = () => {
        router.push("/register");
    };
    return (
        <div className={styles.home}>
            <div className={styles.navbar}>
                <BaseButton onClick={goToLogin}>Login</BaseButton>
                <BaseButton shape="outline" onClick={gotoRegister}>
                    Register
                </BaseButton>
            </div>
            <div className={styles.content}>Skyline</div>
        </div>
    );
};

Home.getInitialProps = async (): Promise<IHomePage.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Home);

export default Extended;
