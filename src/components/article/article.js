import React from 'react';
import img from '../../IMG/IMG-20190303-WA0082.jpg';
import './article.css'

function Article({dataArt,imgArt}){
    return(
        <div className='articleContainer'>
            <div className='articleImgDiv'>
                <img className='articleImg' alt='' src={imgArt}/>
            </div>
            <article className='articleArt'>
            {dataArt}
            </article>
        </div>
    )
}

export default Article;