import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './Form.module.scss';

interface FormProps {
    className?: string;
}

export const Form: FC<FormProps> = (props) => {
    const { children, className } = props;

    return (
        <div className={classNames(styles.Form, {}, [className])}>
            {children}
        </div>
    );
};
