import styles from "./Header.module.scss";
import React from "react";
import {Icon} from "@components/Icon/Icon";
import { useWeb3Modal } from '@web3modal/wagmi/react';

export const Header = () => {
    const { open } = useWeb3Modal();

    return (
        <div className={styles.root}>
            <div className={styles.logoContainer}>
                <Icon name="logo"/>
                <div className={styles.title}>Finger Coin</div>
            </div>
            <button className={styles.connectButton} onClick={() => open()} type="button">
                Wallet
            </button>
        </div>
    );
};
