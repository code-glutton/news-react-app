import React from 'react';
import {useSelector} from 'react-redux';
import ImgTextGroup from '../../imgTextGroup/imgTextGroup'

function Business({articleData}){
    const businessSelect = (state) => state.business;
    const businessPull = useSelector(businessSelect);

    return (
        <main>
            <ImgTextGroup headerTitle='Business' collection = {businessPull} passArticle={articleData}/>
        </main>
    )
}

export default Business;