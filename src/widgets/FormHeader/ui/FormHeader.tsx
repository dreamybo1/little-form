import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import InfoIcon from 'shared/assets/icons/info.svg';

import styles from './FormHeader.module.scss';

interface FormHeaderProps {
    className?: string;
}

export const FormHeader: FC<FormHeaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={classNames(styles.FormHeader, {}, [className])}>
            <div className={classNames(styles.Buttons)}>
                <LangSwitcher />
                <Button>
                    <InfoIcon />
                </Button>
            </div>
        </div>
    );
};
