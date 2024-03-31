import React, {useState} from 'react';
import styles from './Invite.module.scss';
import {Icon} from "@components/Icon/Icon";
import {useAccount, useWriteContract} from "wagmi";
import {abi} from "../../abi";
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";

const InvitePage = () => {
    const { data: hash, writeContractAsync } = useWriteContract()
    const {address} = useAccount();

    const handleWriteContract = async () => {
        await writeContractAsync({
            address: '0xFE3D58c42B01f5AeeCDfe184C533efD8A16B7C06',
            abi,
            functionName: 'mint',
            args: [
                address,
                BigInt(10000*(10**18))
            ],
        }).then((value) => {
            toast(`Success! Hash: ${value}`)
                setCoins('0')
        }
        ).catch((e) => toast(`Error! ${e.toString()}`))
    }
    const [coins, setCoins] = useState('10,000')
    return (
        <div className={styles.root}>
            <ToastContainer />
            <span>Finger Coins: {coins}</span>
            <button onClick={handleWriteContract} className={styles.mintButton}>Mint</button>
            <img src="/gift.png" alt='Gift'/>
            <span className={styles.inviteText}>
                Invite your friends and get bonuses for each invited friend!
            </span>
            <button className={styles.copyLinkButton}>Copy Link</button>
            <div className={styles.socials}>
                <Icon name="twitter" key='twitter' className={styles.socialIcon}/>
                {/*<Icon name="facebook"  key='facebook' className={styles.socialIcon}/>*/}
            </div>

        </div>
    );
};

export default InvitePage;
