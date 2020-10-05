import React from 'react';
import {useSelector} from 'react-redux';
import ImgTextGroup from '../../imgTextGroup/imgTextGroup'

function Entertainment({articleData}){
    const entertainmentSelect = (state) => state.entertainment;
    const entertainmentPull = useSelector(entertainmentSelect);
    
    return (
        <main>
            <ImgTextGroup headerTitle='Entertainment' collection = {entertainmentPull} passArticle={articleData}/>
        </main>
    )
}

export default Entertainment;