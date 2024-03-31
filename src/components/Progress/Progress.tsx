import {FC} from "react";
import {Battle} from "../../types/battle";
import styles from './Progress.module.scss';
import * as RadixProgress from '@radix-ui/react-progress';

type ProgressProps = Battle & {
    progress: number;
}

export const Progress:FC<ProgressProps> = (props) => {
    const {progress, left, right} = props;


    return (
        <div className={styles.root}>
            <span className={styles.leftName}>{left.name}</span>

            <RadixProgress.Root className={styles.progressRoot} value={progress}>
                <RadixProgress.Indicator
                    className={styles.progressIndicator}
                    style={{transform: `translateX(-${100 - progress}%)`}}
                />

            </RadixProgress.Root>
            <span className={styles.rightName}>{right.name}</span>
        </div>
    );
};
