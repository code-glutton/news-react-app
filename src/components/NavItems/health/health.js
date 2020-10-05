import React from 'react';
import {useSelector} from 'react-redux';
import ImgTextGroup from '../../imgTextGroup/imgTextGroup'

function Health({articleData}){
    const healthSelect = (state) => state.health;
    const healthPull = useSelector(healthSelect);

    return (
        <main>
            <ImgTextGroup headerTitle='Health' collection = {healthPull} passArticle={articleData}/>
        </main>
    )
}

export default Health;