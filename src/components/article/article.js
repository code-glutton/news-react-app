import React from 'react'
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