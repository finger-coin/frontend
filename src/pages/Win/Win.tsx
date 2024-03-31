import React from 'react';
import styles from './Win.module.scss';

const WinPage = () => {
    return (
        <div className={styles.root}>
            <h1>YOU WON!</h1>
            <h2>+10,000</h2>
            <img src="/win.png"/>
        </div>
    );
};

export default WinPage;
