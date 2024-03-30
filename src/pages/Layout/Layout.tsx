import React, { FC } from 'react';
import {Header} from "@components/Header/Header";
import {Footer} from "@components/Footer/Footer";
import styles from './Layout.module.scss';


const Layout: FC = ({ children }) => {
    return (
        <div className={styles.root}>
            <Header />
            <div className={styles.main}>
            {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
