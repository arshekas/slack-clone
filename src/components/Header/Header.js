import { Avatar } from '@material-ui/core';
import './Header.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{user}] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <Avatar 
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                <SearchIcon />
                <input placeholder="Search" />
            </div>
            <div className="header__right">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}
export default Header;
