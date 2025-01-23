import React from 'react'
import userIcon from '../../assets/user-icon.png';
import styles from './Header.module.css'

import { Link } from 'react-router-dom'

import { signOut } from 'firebase/auth'
import { auth } from '../../config/firebase-config';

import { useDispatch, useSelector } from 'react-redux';
import { setIsLoginStatus, setUserData } from '../../slice/loginSlice';

const Header = () => {
    const { displayName, photoUrl } = JSON.parse(localStorage.getItem('loginData')) || useSelector(state => state.blog.userData);
    const dispatch = useDispatch();

    const onLogoutClick = async () => {
        await signOut(auth);
        dispatch(setIsLoginStatus(false));
        dispatch(setUserData({}));
        // localStorage.clear();
        localStorage.removeItem("loginData");
    }

    return (
        <div className={styles['header-container']}>
            <div className={styles['user-data']}>
                <img src={photoUrl || userIcon} alt="user-icon" />
                <h3>{displayName}</h3>
            </div>
            <ul className={styles['nav-links']}>
                <li>
                    <Link to={'/home'} >Home</Link>
                </li>

                <li>
                    <Link to={'/createblog'} >Create Blog</Link>
                </li>
            </ul>

            <div className={styles.logout}>
                <Link onClick={onLogoutClick} to={'/'}>Logout</Link>
            </div>
        </div>
    )
}

export default Header