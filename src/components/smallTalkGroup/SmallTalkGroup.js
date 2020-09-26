import React from 'react';
import SectionHeader from '../sectionHeader';
import SmallTalk from '../smallTalkComponent/smallTalk';
import './smallTalkGroup.css';

function SmallTalkGroup({headerTitle}){
    const mock ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est tellus, sagittis sit amet augue in, mollis posuere leo. Mauris in consectetur ex. Ut cursus libero turpis, at congue sem tincidunt porta. Praesent vitae nulla sed ante molestie consequat ut eget eros. Vivamus ante lectus, aliquet a enim ut, pulvinar tempus elit. Aliquam vel magna in dui dictum suscipit.";
    return(
        <section className='smallTalkGroupContainer'>
            <SectionHeader header={headerTitle}/>
            <div className='smallTalkGroupFlex'>
                <div  className='smallTalkGroupFlexItem'>
                    <SmallTalk source='Punch' newsTitle={mock}/>  
                </div>
                <div  className='smallTalkGroupFlexItem'>
                    <SmallTalk source='Punch' newsTitle={mock}/>  
                </div>
                <div  className='smallTalkGroupFlexItem'>
                    <SmallTalk source='Punch' newsTitle={mock}/>  
                </div>
                <div  className='smallTalkGroupFlexItem'>
                    <SmallTalk source='Punch' newsTitle={mock}/>  
                </div>
                <div  className='smallTalkGroupFlexItem'>
                    <SmallTalk source='Punch' newsTitle={mock}/>  
                </div>
                <div  className='smallTalkGroupFlexItem'>
                    <SmallTalk source='Punch' newsTitle={mock}/>  
                </div>
            </div>
        </section>
    )
}

export default SmallTalkGroup;