import React, {useEffect} from 'react'
import { auth , provider } from '../firebase';
import {login, logout} from '../features/user/userSlice';
import {useDispatch} from 'react-redux';
import './LoginPage.css';

export const LoginPage = () => {
    const dispatch = useDispatch();

    const onSignIn = () => {
        auth.signInWithPopup(provider)
        .catch(error => alert(error.message))
    }
    
    useEffect(() => {
        auth.onAuthStateChanged(authuser => {
            if(authuser){
                 dispatch(login({
                    name : authuser.displayName,
                    photo : authuser.photoURL,
                    email : authuser.email
                 }))
            } else {
                dispatch(logout())
            }
        })
    }, [dispatch])

    return (
        <div className="loginPage">
            <div className="loginPage__top">
                <p onClick={onSignIn} className="loginPage__topBtn">Log In</p> 
                <div className="loginPage__desc">
                    <p>TRY UP TO ONE MONTH FREE</p>
                    <img src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png" alt=""/>
                    <h5>
                        <div>Watch thousands of shows and movies, with plans starting at</div> 
                        <div>$5.99/month.</div>
                    </h5>
                    <h6>HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</h6>
                    <button onClick={onSignIn}>Start your free trial</button>
                </div>
            </div>
            <div className="loginPage__bottom">
                <img src="https://www.hulu.com/static/hitch/s3/attachments/cka36ggwd06sm0wfx84ff7cvf-dplus-logo-0-1-2.png" alt=""/>
                <div className="bottomDescription">
                    <p>BUNDLE WITH ANY HULU PLAN & SAVE</p>
                    <h2>Get Hulu, Disney+, and ESPN+ starting at $12.99/month.*</h2>
                </div>
                <button className="bundle">Get Bundle</button>
            </div>
        </div>
    )
}

