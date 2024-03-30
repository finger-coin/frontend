// Label.tsx
import React from 'react';

import { animated, useSpring } from '@react-spring/web';

import styles from './Label.module.scss';

interface LabelProps {
    x: number;
    y: number;
}

const Label: React.FC<LabelProps> = ({ x, y }) => {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });

    return (
        <animated.span className={styles.root} style={{ top: y, left: x, ...props }}>
            +1
        </animated.span>
    );
};

export default Label;
