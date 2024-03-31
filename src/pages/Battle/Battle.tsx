import React, { useState, useEffect } from 'react';
import styles from './Battle.module.scss';
import { Progress } from '@components/Progress/Progress';
import { useNavigate, useParams } from 'react-router-dom';
import { battles } from '../../mock/battles';
import { Coin } from '@components/Coin/Coin';

const BattlePage = () => {
    const { battleId } = useParams<{ battleId: string }>();

    const [clicksCount, setClicksCount] = useState(0);
    const [progress, setProgress] = useState(50);
    const [showText, setShowText] = useState(false);

    if (battleId === undefined) return null;

    const selectedBattle = battles.find(battle => battle.id === parseInt(battleId, 10));

    if (!selectedBattle) {
        return <div>Battle not found</div>;
    }

    const [time, setTime] = useState(15);

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime - 1);
            setProgress(prevProgress => prevProgress - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (time === 0) {
            navigate(`/battle/${battleId}/win`);
        }
    }, [time, navigate, battleId]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleClick = () => {
        setClicksCount(prevClicks => prevClicks + 1);
        setProgress(prevProgress => prevProgress + 1);
        setShowText(true);

        setTimeout(() => {
            setShowText(false);
        }, 300);
    };

    return (
        <div className={styles.root}>
            <Progress progress={progress} {...selectedBattle} />
            <div className={styles.timerContainer}>
                <span className={styles.timer}>Time left: {formatTime(time)}</span>
                <span className={styles.coins}>{clicksCount}</span>
            </div>


            <Coin onClick={handleClick}/>
        </div>
    );
};

export default BattlePage;
