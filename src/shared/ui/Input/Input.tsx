import { classNames } from 'shared/lib/classNames/classNames';
import { FC, InputHTMLAttributes } from 'react';
import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

export const Input: FC<InputProps> = (props) => {
    const {
        children,
        className,
        ...otherProps
    } = props;

    return (
        <div className={classNames(styles.InputContainer, {}, [className])}>
            <input
                className={styles.Input}
                {...otherProps}
            />
            <div>
                {children}
            </div>
        </div>
    );
};
