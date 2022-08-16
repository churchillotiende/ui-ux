import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import Search from '../search/Search';
import "./banner.scss";
import {useHistory} from 'react-router-dom';

export default function Banner() {
    const history = useHistory();
    const[showSearch , setShowSearch] = useState(false);
  return (
    <div className='banner'>
        <div className="banner__search">
            {showSearch && <Search/>}
            <Button className="banner__searchButton" variant='outlined'
                onClick={() => setShowSearch(!showSearch)}
            >
                {showSearch ? "hide ":"Search Dates" }
            </Button>
        </div>
        <div className='banner__info'>
            <h1>Get out and Stretch your imagination</h1>
            <h5>Plan a different kind of getaway to uncover the 
                hiddens gems near you
            </h5>
            <Button variant='outlined' onClick = {() =>history.push('/search')}>
                Explore nearby
            </Button>
        </div>
    </div>
  )
}
