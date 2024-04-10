import React, { useState, useEffect } from 'react';
import styles from './Battle.module.scss';
import { Progress } from '@components/Progress/Progress';
import { useNavigate, useParams } from 'react-router-dom';
import { battles } from '../../mock/battles';
import { Coin } from '@components/Coin/Coin';
import {currentSide} from "@store/battle";
import {useUnit} from "effector-react";
import {increaseBalance} from "@store/balance";

const BattlePage = () => {
    const { battleId } = useParams<{ battleId: string }>();

    const [clicksCount, setClicksCount] = useState(0);
    const [progress, setProgress] = useState(50);
    const [showText, setShowText] = useState(false);
    const [reactions, setReactions] = useState<any[]>([]);

    if (battleId === undefined) return null;

    const selectedBattle = battles.find((battle) => battle.id === parseInt(battleId, 10));

    if (!selectedBattle) {
        return <div>Battle not found</div>;
    }

    const [time, setTime] = useState(1500);

    const increaseUserBalance = useUnit(increaseBalance)

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
            setProgress((prevProgress) => prevProgress - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    useEffect(() => {
        if (time === 0) {
            navigate(`/battle/${battleId}/win`, { state: { clicksCount }});
            increaseUserBalance(clicksCount)

        }
    }, [time, navigate, battleId]);


    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    const handleClick = () => {
        setClicksCount((prevClicks) => prevClicks + 1);
        setProgress((prevProgress) => prevProgress + 1);
        setShowText(true);

        setReactions((prevReactions) => [
            ...prevReactions,
            {
                id: Date.now(),
                animation: true,
                top: Math.random() * 100,
                left: 10 - Math.random() * 100,
            },
        ]);

        setTimeout(() => {
            setShowText(false);
        }, 300);
    };
    const curSide = useUnit(currentSide)

    return (
        <div className={styles.root}>
            <Progress progress={progress} {...selectedBattle} />
            <div className={styles.timerContainer}>
                <span className={styles.timer}>Time left: {formatTime(time)}</span>
                <span className={styles.coins}>{clicksCount}</span>
            </div>
            <div className={styles.boostButtonContainer}><button className={styles.boostButton}>Boost</button></div>
            <Coin video={curSide?.videoUrl ?? 'woody.mp4'} onClick={handleClick} />
            <div className={styles.reactionsContainer}>
                {reactions.map((reaction) => (
                    <img
                        key={reaction.id}
                        className={`${styles.reaction} ${reaction.animation ? styles.animation : ''}`}
                        style={{
                            top: `${reaction.top}%`,
                            left: `calc(50% + ${reaction.left}px)`,
                        }}
                        src="/like.png"
                        onAnimationEnd={() => {
                            setReactions((prevReactions) => prevReactions.filter((item) => item.id !== reaction.id));
                        }}
                    />
                ))}

            </div>
        </div>
    );
};

export default BattlePage;
