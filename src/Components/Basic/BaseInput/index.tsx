import { ChangeEvent, ComponentPropsWithoutRef, FC } from "react";
import styles from "./styles.module.scss";

export interface BaseInputProps {
    type: string;
    placeholder?: string;
    className?: string;
    id?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string | number | string[] | undefined;
    [x: string]: any;
}

export const BaseInput: FC<BaseInputProps> = ({
    type,
    placeholder,
    className,
    id,
    onChange,
    value,
    ...otherProps
}) => {
    const inputClassName: string = `${styles.BaseInput} ${className}`;

    return (
        <input
            type="text"
            value={value}
            className={inputClassName}
            placeholder={placeholder}
            data-testid="BaseInput"
            onChange={onChange}
            {...otherProps}
        />
    );
};
