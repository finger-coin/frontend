import { FC } from 'react';
import { BattleCard, BattleCardProps } from '@components/BattleCard/BattleCard';
import styles from './BattleCardList.module.scss';
import * as ScrollArea from '@radix-ui/react-scroll-area';

type BattleCardListProps = {
    battleCards: BattleCardProps[];
};

export const BattleCardList: FC<BattleCardListProps> = (props) => {
    const { battleCards } = props;
    return (
        <ScrollArea.Root className={styles.root}>
            <ScrollArea.Viewport className={styles.viewPort}>
                {battleCards.map((battleCard) => (
                    <div key={battleCard.id} style={{ marginBottom: '16px' }}>
                        <BattleCard {...battleCard} />
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
    );
};
