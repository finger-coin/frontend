import styles from './Footer.module.scss';
import { Icon, IconKind } from '@components/Icon/Icon';

const buttons: { icon: IconKind; name: string, href: string }[] = [
    {
        icon: 'rocket',
        name: 'Play',
        href: '/'
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
    return (
        <div className={styles.root}>
            {buttons.map((button) => (
                <a href={button.href} className={styles.buttonContainer}>
                    <Icon name={button.icon} className={styles.buttonIcon} />
                    <span className={styles.buttonName}>{button.name}</span>
                </a>
            ))}
        </div>
    );
};
