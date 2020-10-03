import React from 'react';
import './navigation.css';
import search from '../IMG/icons8-search.svg';
import {Link} from 'react-router-dom';

function NavigationBar (){
    return(
        <nav className='navigationContainer'>
            <div className='headers'>
                <h2>Amebo</h2>
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
            <div className='searchContainer'>
                <div className='searchDiv'>
                    <input type='text' className='searchBox' placeholder='search'/>
                    <button>
                        <img src={search} alt='searchLogo'/>
                    </button>
                </div>
                
            </div>
        </nav>
    )
}

export default NavigationBar;