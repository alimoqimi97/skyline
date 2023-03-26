import React from "react";

import { ILocaleButton } from "./LocaleButton";

import { Button } from "../Basic";

export const LocaleButton: React.FunctionComponent<ILocaleButton.IProps> = ({
    lang,
    isActive,
    onClick,
}) => {
    return <Button onClick={onClick}>{lang}</Button>;
};
