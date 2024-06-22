import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'shared/ui/Form/Form';
import { FormHeader } from 'widgets/FormHeader';
import { FormBody } from 'widgets/FormBody';

import styles from './PayPage.module.scss';

interface PayPageProps {
    className?: string;
}

export const PayPage: FC<PayPageProps> = (props) => {
    const { className } = props;
    return (
        <main className={classNames(styles.PayPage, {}, [className])}>
            <Form>
                <FormHeader />
                <FormBody />
            </Form>
        </main>
    );
};
