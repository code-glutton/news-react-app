import React from 'react';
import './navigation.css';
import search from '../IMG/icons8-search.svg'

function NavigationBar (){
    return(
        <nav className='navigationContainer'>
            <div className='header'>
                <h2>Amebo</h2>
            </div>
            <div className='listContainer'>
                <ul className='unordered'>
                    <li>Home</li>
                    <li>Politics</li>
                    <li>Sports</li>
                    <li>Music</li>
                    <li>Anime</li>
                    <li>Business</li>
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