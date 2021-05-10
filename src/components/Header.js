import React from 'react'
import {auth} from '../firebase';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Avatar } from '@material-ui/core';
import {useSelector} from 'react-redux';
import {getUser} from '../features/user/userSlice';

const Header = () => {
    const {name,photo} = useSelector(getUser);
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__icon active">
                  <HomeIcon />
                  <p>Home</p>
                </div>
                <div className="header__icon">
                  <FlashOnIcon />
                  <p>Trending</p>
                </div>
                <div className="header__icon">
                 <LiveTvIcon />
                 <p>Verified</p>
                </div>
                <div className="header__icon">
                 <VideoLibraryIcon />
                 <p>Collections</p>
                </div>
                <div className="header__icon">
                 <SearchIcon />
                 <p>Search</p>
                </div>
                <div className="header__icon">
                 <PersonOutlineIcon />
                 <p>Account</p>
                </div>
                <div className="header__icon">
                    <Avatar className="avatar" src={photo} alt="" />
                    <p>{name.split(' ')[0]}</p>
                </div>
                <div className="header__icon">
                    <button onClick={() => auth.signOut()} className="logout">Log Out</button>
                </div>
            </div>
            <img src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" alt="" />
        </div>
    )
}

export default Header;



