import React, { FC } from 'react';
import {Header} from "@components/Header/Header";
import {Footer} from "@components/Footer/Footer";
import styles from './Layout.module.scss';
import {useLocation, useParams} from "react-router-dom";
import clsx from "clsx";

const Layout: FC = ({ children }) => {
    const location = useLocation();
    const params = useParams();

    const isGame = location.pathname.includes('/battle/') && location.pathname.includes('/click');

    return (
        <div className={clsx(styles.root, isGame && styles.isPurple)}>
            <Header isGame={isGame} />
            <div className={clsx(styles.main, isGame && styles.isPurple)}>
                {children}
            </div>
            <Footer isGame={isGame} />
        </div>
    );
};

export default Layout;
