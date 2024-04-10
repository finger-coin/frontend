import React from 'react';
import styles from './Win.module.scss';
import {Link, useLocation} from "react-router-dom";

const WinPage = () => {
    const location = useLocation();
    const clicksCount = location.state?.clicksCount;

    return (
        <div className={styles.root}>
            <h1>YOU WON!</h1>
            <h2>+{clicksCount}</h2>
            <img src="/win.png"/>
            <Link className={styles.okButtonContainer} to="/">
                <button className={styles.okButton}>OK</button>
            </Link>
        </div>
    );
};

export default WinPage;
