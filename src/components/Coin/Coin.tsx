import React, { FC, useState } from 'react';

import { animated, useSpring } from '@react-spring/web';

import styles from './Coin.module.scss';

import { ReactComponent as CoinIcon } from '@assets/icons/coin.svg';

const AnimatedCoinIcon = animated(CoinIcon);

type CoinProps = {
    onClick: () => void;
};

export const Coin: FC<CoinProps> = ({ onClick }) => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
        if (onClick) onClick();
        setTimeout(() => setClicked(false), 100);
    };

    const animatedProps = useSpring({
        transform: clicked ? 'scale(1.05)' : 'scale(1)',
        config: { tension: 1000, friction: 15 },
    });

    const backgroundProps = useSpring({
        backgroundColor: clicked ? 'rgba(229,25,25,0.2)' : 'rgba(255, 209, 59, 0.41)',
        config: { duration: 300 },
    });

    return (
        <animated.div className={styles.root} style={backgroundProps} onClick={handleClick}>
            <AnimatedCoinIcon className={styles.coinIcon} style={animatedProps} />
        </animated.div>
    );
};
