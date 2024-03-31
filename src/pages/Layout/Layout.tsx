import React, { FC } from 'react';
import {Header} from "@components/Header/Header";
import {Footer} from "@components/Footer/Footer";
import styles from './Layout.module.scss';
import {useLocation, useParams} from "react-router-dom";
import clsx from "clsx";


const Layout: FC = ({ children }) => {
    const location = useLocation();

    console.log(location.pathname)
    return (
        <div className={clsx(styles.root, location.pathname === '/battle/0/click' && styles.isPurple)}>
            <Header isGame={location.pathname === '/battle/0/click'} />
            <div className={clsx(styles.main, location.pathname === '/battle/0/click' && styles.isPurple)}>
            {children}
            </div>
            <Footer isGame={location.pathname === '/battle/0/click'}/>
        </div>
    );
};

export default Layout;
