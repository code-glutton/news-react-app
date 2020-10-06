import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';

function NavigationBar (){
    return(
        <nav className='navigationContainer'>
            <div className='headers'>
                <h2><Link className='linkStyle' to='/'>Amebo</Link></h2>
            </div>
            <div className='listContainer'>
                <ul className='unordered'>
                    <li><Link className='linkStyle' to='/'>Home</Link></li>
                    <li><Link className='linkStyle' to='/politics'>Politics</Link></li>
                    <li><Link className='linkStyle' to='/sports'>Sports</Link></li>
                    <li><Link className='linkStyle' to='/entertainment'>Entertainment</Link></li>
                    <li><Link className='linkStyle' to='/health'>Health</Link></li>
                    <li><Link className='linkStyle' to='/business'>Business</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar;