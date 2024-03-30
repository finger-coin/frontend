import React, { forwardRef, HTMLAttributes } from 'react';

import { ReactComponent as Coin } from '@assets/icons/coin.svg';

export const icons = {
    coin: Coin,
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
