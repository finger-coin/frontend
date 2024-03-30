import styles from './Footer.module.scss';
import { Icon, IconKind } from '@components/Icon/Icon';
import {useLocation, useParams} from "react-router-dom";
import clsx from "clsx";

const buttons: { icon: IconKind; name: string, href: string }[] = [
    {
        icon: 'rocket',
        name: 'Play',
        href: '/home'
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

export const Footer = () => {
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
