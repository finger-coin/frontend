// App.tsx
import React, { useState } from 'react';

import { useWeb3Modal } from '@web3modal/wagmi/react';

import { Coin } from '@components/Coin/Coin';
import Overlay from '@components/Overlay/Overlay';

import styles from './App.module.scss';

function App() {
    const { open } = useWeb3Modal();
    const [coinsCount, setCoinsCount] = useState<number>(0);
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

    return (
        <div className={styles.root}>
            <button onClick={() => open()} type="button">
                connect
            </button>
            <Overlay labels={labels} />
            <h1 className={styles.coinsCount}>{coinsCount}</h1>
            <Coin onClick={handleCoinClick} />
        </div>
    );
}

export default App;
