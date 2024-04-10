import React, { FC, useState } from 'react';

import { animated, useSpring } from '@react-spring/web';

import styles from './Coin.module.scss';

const danceMan = '/woody.mp4';

type CoinProps = {
    onClick?: () => void;
    video: string;
};

export const Coin: FC<CoinProps> = ({ onClick, video }) => {
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

    return (
        <animated.div className={styles.root}  onClick={handleClick}>
            {/*<video autoPlay loop className={styles.videoContainer}>*/}
            {/*    <source src="/danceman.mp4" type="video/mp4"/>*/}
            {/*    Your browser does not support the video tag.*/}
            {/*</video>*/}
            <animated.video src={danceMan} autoPlay loop  className={styles.coinIcon} style={animatedProps}/>
        </animated.div>
    );
};
