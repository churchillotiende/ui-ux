import React from 'react';
import './header.scss';
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Header() {
  const history = useHistory();
  return (
    <div className='app__header'>
      <div>
        <img  onClick={() => history.push('/')} className="app__logo" src='https://travelshopgirl.com/wp-content/uploads/2015/10/airbnb_horizontal_lockup_web.jpg'
          alt='airbnb' />
      </div> 
      <div className='header__center'>
        <input className='input__field' type='text'/>
        <SearchIcon />
      </div> 
      <div className='header__right'>
        <p>Become A host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>      
         
    </div>
  )
}
