import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import LanguageIcon from 'shared/assets/icons/lang.svg';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props;
    const { i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={onToggle}
            className={classNames('', {}, [className])}
        >
            <LanguageIcon />
        </Button>
    );
};
