// App.tsx
import React, { useState } from 'react';


import { Coin } from '@components/Coin/Coin';
import Overlay from '@components/Overlay/Overlay';

import styles from './App.module.scss';
import {Header} from "@components/Header/Header";
import {useAccount, useWalletClient, useWriteContract} from "wagmi";
import {abi} from "./abi";

function App() {
    const { data: hash, writeContract } = useWriteContract()
    const [coinsCount, setCoinsCount] = useState<number>(0);
    const {address} = useAccount();
    const [labels, setLabels] = useState<{ x: number; y: number }[]>([]);

    const handleAddLabel = () => {
        const randomX = Math.random() * window.innerWidth - 64;
        const randomY = Math.random() * (window.innerHeight / 2 - 64);
        setLabels((prevLabels) => [...prevLabels, { x: randomX, y: randomY }]);
        setTimeout(() => {
            setLabels((prevLabels) => prevLabels.slice(1));
        }, 500);
    };

    const handleCoinClick = () => {
        handleAddLabel();
        setCoinsCount((prev) => prev + 1);
    };

    const handleWriteContract = () => {
        writeContract({
            address: '0xFE3D58c42B01f5AeeCDfe184C533efD8A16B7C06',
            abi,
            functionName: 'mint',
            args: [
                address,
                BigInt(10*(10**18))
            ],
        })
    }


    return (
        <div className={styles.root}>
            <Overlay labels={labels} />
            <Header />
            <h1 className={styles.coinsCount}>{coinsCount}</h1>
            <Coin onClick={handleCoinClick} />
            <button type="button" onClick={handleWriteContract}>write contract</button>
            {hash && <div className={styles.hash}>Transaction Hash: {hash}</div>}
        </div>
    );
}

export default App;
