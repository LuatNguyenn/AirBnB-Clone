import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import LanguageIcon from '@material-ui/icons/LanguageIcon';
import {Avatar} from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';

function Header() {
  return (
    <div className='header'>
      <img
        className='header__icon'
        src='https://content.fortune.com/wp-content/uploads/2014/07/new-logos-airbnb.jpg'
        alt=''
      />

        <div className='header__center'>
            <input type="text" />
            <SearchIcon />
        </div>

        <div className='header__right'>
          <p>Become a host</p>
          <LanguageIcon/>
          <ExpandMoreIcon/>
          <Avatar/>
        </div>

    </div>
  );
}

export default Header;
