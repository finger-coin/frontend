import styles from './Home.module.scss'
import {BattleCardList} from "@components/BattleCardList/BattleCardList";
import {battles} from "../../mock/battles";

const HomePage = () => {
    return (
        <div className={styles.root}>
            <span className={styles.title}>Choose your play</span>
           <BattleCardList battleCards={battles} />
        </div>
    );
};

export default HomePage
