import React from 'react';
import SectionHeader from '../sectionHeader';
import ImgText from '../imgTextComponent/imgText';
import './imgTextGroup.css';
import {useHistory} from 'react-router-dom';

function ImgTextGroup({headerTitle,collection,passArticle}){
    const history = useHistory();
    const onPress = (dataText,dataImg) => {
        passArticle(dataText,dataImg);
        history.push('/article');
    }

    let count = 0; 
    
    return(
        <section className='imgTextGroupContainer'>
            <SectionHeader header={headerTitle}/>
            <div className='imgTextGroupFlex'>
            {collection.map(data => (
                <div className='imgTextGroupFlexItems' key={count = count+1} onClick={() => {onPress(data.content,data.urlToImage)}}>
                    <ImgText source={data.source.name} newsTitle={data.title} img={data.urlToImage}/>
                </div>
            ))}     
            </div>
        </section>
    )
}

export default ImgTextGroup;