import React, { FC } from "react";
import styles from "./styles.module.scss";

export interface BaseButtonProps {
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: () => void
}

export const BaseButton: FC<BaseButtonProps> = (
    {className, type , children, onClick} = {
        text: "button",
        className: "",
        type: "button",
    }
) => {
    const buttonClassname: string = `${styles.BaseButton} ${className}`;
    return (
        <button
            type={type}
            className={buttonClassname}
            data-testid="BaseButton"
            onClick={onClick}
        >
            {children}
        </button>
    );
};
