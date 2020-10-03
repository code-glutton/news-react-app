import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import ImgTextGroup from '../../imgTextGroup/imgTextGroup'

function Sports({articleData}){
    const sportSelect = (state) => state.sports;
    const sportPull = useSelector(sportSelect);

    return (
        <main>
            <ImgTextGroup headerTitle='Sports' collection = {sportPull} passArticle={articleData}/>
        </main>
    )
}

export default Sports;