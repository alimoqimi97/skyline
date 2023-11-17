import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import { ILogin } from "@Interfaces";
import dynamic from "next/dynamic";

const LoginContainer = dynamic(
    () => import("src/containers/auth/login-container"),
    {
        ssr: false,
    }
);

const Login: NextPage<ILogin.IProps, ILogin.InitialProps> = () => {
    return <LoginContainer />;
};

Login.getInitialProps = async (): Promise<ILogin.InitialProps> => {
    return { namespacesRequired: ["common"] };
};

const Extended = withTranslation("common")(Login);

export default Extended;
