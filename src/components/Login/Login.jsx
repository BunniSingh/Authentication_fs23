import React from 'react'
import styles from './Login.module.css'

import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth'

import { useDispatch } from 'react-redux'
import { setIsLoginStatus, setUserData } from '../../slice/loginSlice';

import { FaGoogle } from "react-icons/fa";

import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogInClick = async() =>{
        // console.log('Login successful')
        try{
            const result = await signInWithPopup(auth,provider);
            const {displayName, email, localId, photoUrl} = result._tokenResponse;
            const userData = {
                displayName,
                email,
                photoUrl,
                localId
            }
            dispatch(setUserData(userData))
            dispatch(setIsLoginStatus(true));
            navigate('/home')
            localStorage.setItem('loginData', JSON.stringify(userData));
        }catch(err){
            console.log(err);
        }
    }
  return (
    <div className={styles['login-container']}>
        <p className={styles['google-btn-discription']}>Sign In with google to continue</p>
        <button
         onClick={onLogInClick}
         className={styles['login-google-btn']}
        > <FaGoogle className={styles.icon}/> SignIn with Google</button>
    </div>
  )
}

export default Login