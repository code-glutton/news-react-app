import React from 'react';
import ImgTextGroup from '../../imgTextGroup/imgTextGroup';
import {useSelector} from 'react-redux';

function Politics({articleData}){
    const politicsSelect = (state) => state.politics;
    const politicsPull = useSelector(politicsSelect);
    
    return (
        <main>
            <ImgTextGroup headerTitle='Politics' collection = {politicsPull} passArticle={articleData}/>
        </main>
    )
}

export default Politics;