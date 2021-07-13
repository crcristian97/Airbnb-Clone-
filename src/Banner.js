import React, {useState} from 'react';
import './Banner.css';
import { Button } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import Search from './Search';


function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search />}
                <Button 
                onClick={()=> setShowSearch(!showSearch)} 
                className="banner__searchButton" 
                variant="outlined">
                    {showSearch ? 'Hide' : 'Search Dates'}
                </Button>
            </div>
            <div className="banner_info">
                <h1>Get out and strech out your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hidden gems near you
                <Button onClick={()=> history.push('/search')} variant="outlined">Explore Nearby</Button>
                </h5>
            </div>
        </div>
    )
}

export default Banner
