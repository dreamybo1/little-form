import { classNames } from 'shared/lib/classNames/classNames';
import { FC, FormHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './QiwiForm.module.scss';

interface QiwiFormProps extends FormHTMLAttributes<HTMLFormElement>{
    className?: string;
}

export const QiwiForm: FC<QiwiFormProps> = (props) => {
    const {
        className,
        onSubmit,
        action,
        method,
    } = props;
    const { t } = useTranslation();

    return (
        <form
            action={action}
            method={method}
            className={classNames(styles.QiwiForm, {}, [className])}
            onSubmit={onSubmit}
        >
            <div className={styles.Phone}>
                <span className={styles.Title}>
                    {t('phone')}
                </span>
                <Input
                    type="tel"
                    placeholder={t('telephone_number')}
                />
            </div>
            <Button
                type="submit"
                className={styles.Button}
            >
                {t('pay')}
            </Button>
        </form>
    );
};
