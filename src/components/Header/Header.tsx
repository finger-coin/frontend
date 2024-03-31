import styles from "./Header.module.scss";
import React, {FC} from "react";
import {Icon} from "@components/Icon/Icon";
import { useWeb3Modal } from '@web3modal/wagmi/react';
import clsx from "clsx";

type HeaderProps = {
    isGame?: boolean;
}

export const Header:FC<HeaderProps> = (props) => {
    const {isGame} = props
    const { open } = useWeb3Modal();

    return (
        <div className={clsx(styles.root, isGame && styles.isPurple)}>
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
