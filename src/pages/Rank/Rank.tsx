import React from 'react';
import styles from './Rank.module.scss';
import * as ScrollArea from "@radix-ui/react-scroll-area";
import {BattleCard} from "@components/BattleCard/BattleCard";
import {ranks} from "../../mock/ranks";

const RankPage = () => {
    return (
        <div className={styles.root}>

            <div className={styles.avatarContainer}>
                <img className={styles.img} src="/avatar.png" />
                <span className={styles.number}>No. 6</span>
            </div>
            <ScrollArea.Root className={styles.root}>
                <ScrollArea.Viewport className={styles.viewPort}>
                    {ranks.map((rank, index) => (
                        <div key={rank.url} className={styles.rankCard}>
                            <span>{index+1}</span>
                            <img src={rank.url} />
                            <span>{rank.name}</span>
                            <span>{rank.coins}</span>
                        </div>
                    ))}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
                    <ScrollArea.Thumb className="ScrollAreaThumb" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>

        </div>
    );
};

export default RankPage;
