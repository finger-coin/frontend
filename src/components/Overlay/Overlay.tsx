import React, { FC } from 'react';

import Label from '@components/Label/Label';

import styles from './Overlay.module.scss';

type OverlayProps = {
    labels: { x: number; y: number }[];
};

export const Overlay: FC<OverlayProps> = (props) => {
    const { labels } = props;

    return (
        <div className={styles.root}>
            {labels.map((label, index) => (
                <Label key={index} x={label.x} y={label.y} />
            ))}
        </div>
    );
};

export default Overlay;
