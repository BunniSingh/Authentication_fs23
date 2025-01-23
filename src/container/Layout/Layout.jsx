import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useSelector } from 'react-redux'
const Layout = () => {
    const navigate = useNavigate();
    const userData = useSelector(state => state.blog);
    let data = localStorage.getItem('loginData');
    if (data) {
        data = JSON.parse(data);
    }
    const isLoggedIn = userData.isLogin || data;
    // console.log(isLoggedIn);
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/')
        } else {
            navigate('/home')
        }
    }, [])

    return (
        <>
            {
                isLoggedIn ?
                    <div>
                        <Header />
                        <Outlet />
                    </div > :
                    <>
                    </>
            }
        </>
    )

}

export default Layout