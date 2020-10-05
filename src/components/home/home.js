import React from 'react';
import {useSelector} from 'react-redux';
import SmallTalkGroup from '../smallTalkGroup/SmallTalkGroup';
import ImgTextGroup from '../imgTextGroup/imgTextGroup';
import BigImageGroup from '../BigImageGroup/bigImageGroup';

function Home({articleData}){
    const generalSelect = (state) => state.breaking;
    const general = useSelector(generalSelect);
    let generalSelectedItems =  general.slice(0,7);

    const sportsSelect = (state) => state.sports;
    const sportsPull = useSelector(sportsSelect);
    let sports = sportsPull.slice(0,6);

    const healthSelect = (state) => state.health;
    const healthPull = useSelector(healthSelect);
    let health = healthPull.slice(0,4);

    const businessSelect = (state) => state.business;
    const businessPull = useSelector(businessSelect);
    let business =businessPull.slice(0,4);

    const politicsSelect = (state) => state.politics;
    const politicsPull = useSelector(politicsSelect);
    let politics =politicsPull.slice(0,4);
    
    const entertainmentSelect = (state) => state.entertainment;
    const entertainmentPull = useSelector(entertainmentSelect);
    let entertainment = entertainmentPull.slice(0,6);

    return(
        <main>
            <BigImageGroup headerTitle='General' collection={generalSelectedItems} passArticle={articleData}/>
            <ImgTextGroup headerTitle='Health' collection={health} passArticle={articleData}/>
            <SmallTalkGroup headerTitle='Sport' collection={sports} passArticle={articleData}/>
            <ImgTextGroup headerTitle='Business' collection={business} passArticle={articleData}/>
            <SmallTalkGroup headerTitle='Entertainment' collection={entertainment} passArticle={articleData}/>
            <ImgTextGroup headerTitle='Politics' collection={politics} passArticle={articleData}/>
        </main>
    )
}

export default Home;