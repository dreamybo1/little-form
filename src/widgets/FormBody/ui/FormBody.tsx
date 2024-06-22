import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import CardsIcon from 'shared/assets/icons/cards.svg';
import QiwiIcon from 'shared/assets/icons/qiwi.svg';
import CardsChoosenIcon from 'shared/assets/icons/cards-choosen.svg';
import QiwiChoosenIcon from 'shared/assets/icons/qiwi-choosen.svg';
import { PayInfo } from 'widgets/PayInfo';
import { QiwiForm } from 'widgets/QiwiForm';
import { CardPaymentForm } from 'widgets/CardPaymentForm/ui/CardPaymentForm';
import styles from './FormBody.module.scss';

interface FormBodyProps {
    className?: string;
}

export const FormBody: FC<FormBodyProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const [qiwiOpened, setQiwiOpened] = useState(false);
    const [cardsOpened, setCardsOpened] = useState(false);

    const onClickCard = () => {
        setCardsOpened((prev) => !prev);
        setQiwiOpened(false);
    };
    const cardClassName = classNames(
        styles.Button,
        { [styles.Open]: cardsOpened },
    );
    const onClickQiwi = () => {
        setQiwiOpened((prev) => !prev);
        setCardsOpened(false);
    };
    const qiwiClassName = classNames(
        styles.Button,
        { [styles.Open]: qiwiOpened },
    );

    return (
        <div className={classNames(styles.FormBody, {}, [className])}>
            <div className={styles.Container}>
                <PayInfo />
                <Button
                    className={cardClassName}
                    onClick={onClickCard}
                >
                    {cardsOpened
                        ? <CardsChoosenIcon />
                        : <CardsIcon />}
                    <span>
                        {t('card_payments')}
                    </span>
                </Button>
                {cardsOpened && (
                    <CardPaymentForm
                        className={cardsOpened && 'opened'}
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log('pay cards');
                        }}
                    />
                )}
                <Button
                    className={qiwiClassName}
                    onClick={onClickQiwi}
                >
                    {qiwiOpened
                        ? <QiwiChoosenIcon />
                        : <QiwiIcon />}
                    <span>
                        QIWI
                    </span>
                </Button>
                {qiwiOpened && (
                    <QiwiForm
                        className={qiwiOpened && 'opened'}
                        onSubmit={(e) => {
                            e.preventDefault();
                            console.log('pay qiwi');
                        }}
                    />
                )}
            </div>
        </div>
    );
};
