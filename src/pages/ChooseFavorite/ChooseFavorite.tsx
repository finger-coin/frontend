import styles from './ChooseFavorite.module.scss'
import {useParams} from "react-router-dom";
import {SelectFavorite} from "@components/SelectFavorite/SelectFavorite";
import {battles} from "../../mock/battles";

const ChooseFavoritePage = () => {
    const {battleId} = useParams<{battleId: string}>()

    if (battleId === undefined) return null;

    const selectedBattle = battles.find(battle => battle.id === parseInt(battleId, 10));

    if (!selectedBattle) {
        return <div>Battle not found</div>;
    }

    return (
        <div className={styles.root}>
            <span className={styles.title}>Choose your favorite</span>
            <SelectFavorite {...selectedBattle} />
        </div>
    );
};

export default ChooseFavoritePage
