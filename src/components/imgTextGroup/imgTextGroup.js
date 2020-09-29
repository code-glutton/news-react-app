import React from 'react';
import SectionHeader from '../sectionHeader';
import ImgText from '../imgTextComponent/imgText';
import imgs from '../../IMG/IMG-20190303-WA0082.jpg';
import './imgTextGroup.css';
import {useHistory} from 'react-router-dom';

function ImgTextGroup({headerTitle,collection,passArticle}){
    const history = useHistory();
    const mock ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est tellus, sagittis sit amet augue in, mollis posuere leo. Mauris in consectetur ex. Ut cursus libero turpis, at congue sem tincidunt porta. Praesent vitae nulla sed ante molestie consequat ut eget eros. Vivamus ante lectus, aliquet a enim ut, pulvinar tempus elit. Aliquam vel magna in dui dictum suscipit.";
    const onPress = (dataText,dataImg) => {
        passArticle(dataText,dataImg);
        history.push('/article');
    }
    return(
        <section className='imgTextGroupContainer'>
            <SectionHeader header={headerTitle}/>
            <div className='imgTextGroupFlex'>
            {collection.map(data => (
                <div className='imgTextGroupFlexItems' onClick={() => {onPress(data.content,data.urlToImage)}}>
                    <ImgText source={data.source.name} newsTitle={data.title} img={data.urlToImage}/>
                </div>
            ))}
                
                
            </div>
        </section>
    )
}

export default ImgTextGroup;