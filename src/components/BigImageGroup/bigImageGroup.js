import React from 'react';
import './bigImageGroup.css';
import BigScreen from '../bigScreen/bigScreen';
import SideSmallTalk from '../sideSmallTalk/sideSmallTalk';
import SectionHeader from '../sectionHeader';

function BigImageGroup(){
    return(
        <section>
            <SectionHeader header='General'/>
            <div className='bigImageGroupContainer'>
                <div className='bigImageGroupContainerOne'>
                    <BigScreen/>
                </div>
                <div className='bigImageGroupContainerTwo'>
                    <SideSmallTalk/>
                </div>
            </div>
        </section>
        
    )
}

export default BigImageGroup;