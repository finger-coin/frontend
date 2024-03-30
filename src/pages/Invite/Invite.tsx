import React from 'react';
import styles from './Invite.module.scss';
import {Icon} from "@components/Icon/Icon";

const InvitePage = () => {
    return (
        <div className={styles.root}>
            <img src="/gift.png" alt='Gift'/>
            <span className={styles.inviteText}>
                Invite your friends and get bonuses for each invited friend!
            </span>
            <button className={styles.copyLinkButton}>Copy Link</button>
            <div className={styles.socials}>
                <Icon name="twitter" key='twitter' className={styles.socialIcon}/>
                <Icon name="facebook"  key='facebook' className={styles.socialIcon}/>
            </div>

        </div>
    );
};

export default InvitePage;
