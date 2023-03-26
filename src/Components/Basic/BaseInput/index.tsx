import React, { FC } from "react";
import styles from "./styles.module.scss";

export interface BaseInputProps {
    type: string;
    placeholder?: string;
    className?: string;
}

export const BaseInput: FC<BaseInputProps> = ({
    type,
    placeholder,
    className,
    ...otherProps
}) => {
    const inputClassName: string = `${styles.BaseInput} ${className}`;

    return (
        <input
            type="text"
            className={inputClassName}
            placeholder={placeholder}
            data-testid="BaseInput"
            {...otherProps}
        />
    );
};
