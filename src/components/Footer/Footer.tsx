import styles from './Footer.module.scss';
import { Icon, IconKind } from '@components/Icon/Icon';
import {useLocation, useParams} from "react-router-dom";
import clsx from "clsx";
import {FC} from "react";

const buttons: { icon: IconKind; name: string, href: string }[] = [
    {
        icon: 'rocket',
        name: 'Play',
        href: '/home'
    },
    {
        icon: 'crown',
        name: 'Rank',
        href: '/rank'
    },
    {
        icon: 'shoppingCart',
        name: 'Shop',
        href: '/shop'
    },
    {
        icon: 'userCirclePlus',
        name: 'Invite',
        href: '/invite'
    },
];

type FooterProps = {
    isBlue?: boolean;
}

export const Footer:FC<FooterProps> = (props) => {
    const {isBlue} = props
    const location = useLocation();
    return (
        <div className={styles.root}>
            {buttons.map((button) => (
                <a href={button.href} key={button.href} className={clsx(styles.buttonContainer, location.pathname.split('/')[1] === button.href.split('/')[1] && styles.isActive)}>
                    <Icon name={button.icon} className={styles.buttonIcon} />
                    <span className={styles.buttonName}>{button.name}</span>
                </a>
            ))}
        </div>
    );
};
