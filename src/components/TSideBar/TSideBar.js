import React from 'react';
import { Link } from 'react-router-dom';
import SideBarRow from './../SideBarRow/SideBarRow';
import './TSideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/'}><SideBarRow Icon={HomeIcon} title='Home' /></Link>
            <Link to={'/trending'}><SideBarRow selected Icon={WhatshotIcon} title='Trending' /></Link>
            <SideBarRow Icon={SubscriptionsIcon} title='Subscription' />
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title='Library' />
            <SideBarRow Icon={HistoryIcon} title='History' />
            <SideBarRow Icon={OndemandVideoIcon} title='Your videos' />
            <SideBarRow Icon={WatchLaterIcon} title='Watch later' />
            <SideBarRow Icon={ThumbUpIcon} title='Liked vides' />
            <hr />
        </div>
    )
}

export default SideBar;