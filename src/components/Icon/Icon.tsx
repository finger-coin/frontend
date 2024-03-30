import React, { forwardRef, HTMLAttributes } from 'react';

import { ReactComponent as Coin } from '@assets/icons/coin.svg';
import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import { ReactComponent as Rocket } from '@assets/icons/Rocket.svg';
import { ReactComponent as ShoppingCart } from '@assets/icons/ShoppingCart.svg';
import { ReactComponent as UserCirclePlus } from '@assets/icons/UserCirclePlus.svg';
import { ReactComponent as FacebookIcons } from '@assets/icons/fb.svg';
import { ReactComponent as TwitterIcon } from '@assets/icons/twitter.svg';

export const icons = {
    twitter: TwitterIcon,
    facebook: FacebookIcons,
    coin: Coin,
    logo: Logo,
    rocket: Rocket,
    shoppingCart: ShoppingCart,
    userCirclePlus: UserCirclePlus,
};

export type IconKind = keyof typeof icons;

export type IconProps = {
    name: IconKind;
} & HTMLAttributes<SVGElement>;

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    const { name, ...otherProps } = props;
    const Tag = icons[name];

    return <Tag {...otherProps} ref={ref} />;
});
