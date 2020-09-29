import React from 'react';
import './sideSmallTalk.css';
import SmallTalk from '../smallTalkComponent/smallTalk';
import {useHistory} from 'react-router-dom';

function SideSmallTalk({data,passArticle}){
    const history = useHistory();

    const onPress = (dataText,dataImg) => {
        passArticle(dataText,dataImg);
        history.push('/article');
    }

    return (
        <div className='sideSmallTalkContainer'>
        {data.map(ele => (
            <div className='sideSmallTalkFlexItem' onClick={() => {onPress(ele.content,ele.urlToImage)}}>
                <SmallTalk source={ele.source.name} newsTitle={ele.title}/>
            </div>
        ))}
           
        </div>
    )
}

export default SideSmallTalk;