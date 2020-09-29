import React from 'react';
import SectionHeader from '../sectionHeader';
import SmallTalk from '../smallTalkComponent/smallTalk';
import './smallTalkGroup.css';
import {useHistory} from 'react-router-dom';


function SmallTalkGroup({headerTitle,collection,passArticle}){
    const history = useHistory();

    const onPress = (dataText,dataImg) => {
        passArticle(dataText,dataImg);
        history.push('/article');
    }
    return(
        <section className='smallTalkGroupContainer'>
            <SectionHeader header={headerTitle}/>
            <div className='smallTalkGroupFlex'>
            {collection.map(data => (
                <div  className='smallTalkGroupFlexItem' onClick={() => {onPress(data.content,data.urlToImage)}}>
                    <SmallTalk source={data.source.name} newsTitle={data.title}/>  
                </div>
            ))}
            </div>
        </section>
    )
}

export default SmallTalkGroup;