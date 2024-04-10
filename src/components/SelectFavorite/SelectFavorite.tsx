import {FC, useState} from "react";
import {Battle, Character} from "../../types/battle";
import styles from './SelectFavorite.module.scss'
import clsx from "clsx";
import {Link, useNavigate} from "react-router-dom";
import {useUnit} from "effector-react";
import {setCurrentBattle, setCurrentSide} from "@store/battle";

export const SelectFavorite: FC<Battle> = (props) => {
    const {left, right, themeUrl} = props;
    const navigate = useNavigate()
    const [setCurBattle, setCurSide] = useUnit([setCurrentBattle, setCurrentSide])
    const [selected, setSelected] = useState<Character>(left);
    const characters = [left, right]
    const battleId = props.id;
    return (
        <div className={styles.root}>
            <img src={themeUrl} className={styles.themeImg} />
            <div className={styles.pickContainer}>
                {characters.map((char) => (
                    <img onClick={() =>setSelected(char)} key={char.name} src={char.imageUrl} className={clsx(styles.image, char === selected && styles.isActive)} />
                ))}
            </div>
            <div className={styles.names}>
                <span>{left.name}</span>
                <span className={styles.vs}>vs</span>
                <span>{right.name}&nbsp;</span>
            </div>
            <button onClick={() => {
                setCurBattle(props)
                setCurSide(selected)
                navigate(`/battle/${battleId}/click`)
            }}   className={styles.startButton}>Start</button>
            <button className={styles.exitButton} onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};
