import { FC } from "react";
import styles from "./styles.module.scss";

export interface BaseButtonProps {
    className?: string;
    onClick?: () => void;
    shape?: "normal" | "outline";
    isDisabled?: boolean;
}

export const BaseButton: FC<BaseButtonProps> = ({
    className = "",
    children,
    onClick,
    shape = "normal",
    isDisabled = false,
}) => {
    const buttonClassname: string = `${styles.BaseButton} ${styles[shape]} ${
        isDisabled ? styles.disabled : ""
    } ${className}`;
    return (
        <button
            type="button"
            className={buttonClassname}
            data-testid="BaseButton"
            onClick={onClick}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
};
