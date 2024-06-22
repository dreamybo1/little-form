import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PayInfo.module.scss';

interface PayInfoProps {
    className?: string;
}

export const PayInfo: FC<PayInfoProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.PayInfo, {}, [className])}>
            <span className={styles.Amount}>
                1 €
            </span>
            <div className={styles.Merchant}>
                <span>
                    {t('merchant')}
                    :
                </span>
                <span className={styles.MerchantName}>
                    FOREXPUB
                </span>
            </div>
        </div>
    );
};
