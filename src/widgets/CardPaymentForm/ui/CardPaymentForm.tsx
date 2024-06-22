import { classNames } from 'shared/lib/classNames/classNames';
import { FC, FormHTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import CvvIcon from 'shared/assets/icons/cvv.svg';
import { Button } from 'shared/ui/Button/Button';
import SBPIcon from 'shared/assets/icons/sbp.svg';
import SberIcon from 'shared/assets/icons/sber.svg';
import { CardPlaceholders } from '../consts';
import styles from './CardPaymentForm.module.scss';

interface CardPaymentFormProps extends FormHTMLAttributes<HTMLFormElement>{
    className?: string;
}

export const CardPaymentForm: FC<CardPaymentFormProps> = (props) => {
    const { children, className, ...otherProps } = props;
    const { t } = useTranslation();

    return (
        <form
            className={classNames(styles.CardPaymentForm, {}, [className])}
            {...otherProps}
        >
            <div className={styles.InputsRow}>
                <div className={styles.CardNumber}>
                    <span className={styles.Title}>
                        {t('card_number')}
                    </span>
                    <Input
                        type="tel"
                        placeholder={CardPlaceholders.CARD}
                    />
                </div>
                <div className={styles.ExpiryDate}>
                    <span className={styles.Title}>
                        {t('expiry_date')}
                    </span>
                    <Input
                        type="tel"
                        placeholder={CardPlaceholders.DATE}
                    />
                </div>
                <div className={styles.CVV}>
                    <span className={styles.Title}>
                        CVV-
                        {t('number')}
                    </span>
                    <Input
                        type="tel"
                        maxLength={3}
                        placeholder={CardPlaceholders.CVV}
                    >
                        <CvvIcon />
                    </Input>
                </div>
            </div>
            <div className={styles.CardHolder}>
                <span className={styles.Title}>
                    {t('card_holder')}
                </span>
                <Input
                    type="tel"
                    placeholder={t('telephone_number')}
                />
            </div>
            <div className={styles.Buttons}>
                <Button
                    type="submit"
                    className={styles.ButtonPay}
                >
                    {t('pay')}
                </Button>
                <div className={styles.OtherButtons}>
                    <Button
                        className={styles.ButtonSBP}
                    >
                        <SBPIcon />
                    </Button>
                    <Button
                        className={styles.ButtonSber}
                    >
                        <SberIcon />
                    </Button>
                </div>
            </div>
        </form>
    );
};
