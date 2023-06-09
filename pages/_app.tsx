// #region Global Imports
import * as React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
// #endregion Global Imports

// #region Local Imports
import { appWithTranslation } from "@Server/i18n";
import { AppWithStore } from "@Interfaces";
import { makeStore } from "@Redux";

import "../styles/globals.css";
// #endregion Local Imports

class WebApp extends App<AppWithStore> {
    static async getInitialProps({
        Component,
        ctx,
    }: AppContext): Promise<AppInitialProps> {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        );
    }
}

export default withRedux(makeStore)(appWithTranslation(WebApp));
