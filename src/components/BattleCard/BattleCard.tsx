import { FC } from 'react';
import styles from './BattleCard.module.scss';
import { Battle } from '../../types/battle';
import {Link} from "react-router-dom";

export type BattleCardProps = Omit<Battle, 'themeUrl'>;

export const BattleCard: FC<BattleCardProps> = (props) => {
    const { left, right, imageUrl, id } = props;
    return (
        <Link className={styles.root} to={`/battle/${id}/choose`}>
            <span className={styles.title}>
                {left.name}&nbsp;vs&nbsp;{right.name}
            </span>
            <img src={imageUrl} className={styles.image} />
        </Link>
    );
};
