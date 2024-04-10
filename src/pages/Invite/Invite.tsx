import React, {useState} from 'react';
import styles from './Invite.module.scss';
import {Icon} from "@components/Icon/Icon";
import {useAccount, useWriteContract} from "wagmi";
import {abi} from "../../abi";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";
import {$balance, decreaseBalance} from "@store/balance";
import {useUnit} from "effector-react";

const InvitePage = () => {
    const { data: hash, writeContractAsync } = useWriteContract()
    const {address} = useAccount();
    const [balance, decreaseUserBalance] = useUnit([$balance, decreaseBalance])

    const handleWriteContract = async () => {
        await writeContractAsync({
            address: '0xFE3D58c42B01f5AeeCDfe184C533efD8A16B7C06',
            abi,
            functionName: 'mint',
            args: [
                address,
                BigInt(balance*(10**18))
            ],
        }).then((value) => {
            toast(`Success! Hash: ${value}`)
                decreaseUserBalance(balance)
        }
        ).catch((e) => toast(`Error! ${e.toString()}`))
    }
    return (
        <div className={styles.root}>
            <ToastContainer />
            <span>Finger Coins: {balance}</span>
            <button onClick={handleWriteContract} className={styles.mintButton}>Mint</button>
            <img src="/gift.png" alt='Gift'/>
            <span className={styles.inviteText}>
                Invite your friends and get bonuses for each invited friend!
            </span>
            <button className={styles.copyLinkButton}>Copy Link</button>
            <div className={styles.socials}>
                <a href={"https://x.com/fingercoin2024"}><Icon name="twitter" key='twitter' className={styles.socialIcon}/></a>
                {/*<Icon name="facebook"  key='facebook' className={styles.socialIcon}/>*/}
            </div>

        </div>
    );
};

export default InvitePage;
