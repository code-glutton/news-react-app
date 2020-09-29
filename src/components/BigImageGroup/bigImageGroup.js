import React from 'react';
import './bigImageGroup.css';
import BigScreen from '../bigScreen/bigScreen';
import SideSmallTalk from '../sideSmallTalk/sideSmallTalk';
import SectionHeader from '../sectionHeader';

function BigImageGroup({headerTitle,collection,passArticle}){
    let removed = collection.splice(0, 1);
    console.log(removed);
    return(
        <section>
            <SectionHeader header={headerTitle}/>
            <div className='bigImageGroupContainer'>
                <div className='bigImageGroupContainerOne'>
                    <BigScreen data={removed[0]} passArticle={passArticle}/>
                </div>
                <div className='bigImageGroupContainerTwo'>    
                    <SideSmallTalk data={collection} passArticle={passArticle}/>    
                </div>
            </div>
        </section>
        
    )
}

export default BigImageGroup;