import React, { FC } from 'react';
import {Header} from "@components/Header/Header";
import {Footer} from "@components/Footer/Footer";
import styles from './Layout.module.scss';
import {useLocation, useParams} from "react-router-dom";


const Layout: FC = ({ children }) => {
    const location = useLocation();

    console.log(location)
    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.main}>
            {children}
            </div>
            <Footer isBlue={location.pathname.split('/')[1] === 'battle'} />
        </div>
    );
};

export default Layout;
