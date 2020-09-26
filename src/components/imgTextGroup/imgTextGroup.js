import React from 'react';
import SectionHeader from '../sectionHeader';
import ImgText from '../imgTextComponent/imgText';
import imgs from '../../IMG/IMG-20190303-WA0082.jpg';
import './imgTextGroup.css'

function ImgTextGroup({headerTitle}){
    const mock ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est tellus, sagittis sit amet augue in, mollis posuere leo. Mauris in consectetur ex. Ut cursus libero turpis, at congue sem tincidunt porta. Praesent vitae nulla sed ante molestie consequat ut eget eros. Vivamus ante lectus, aliquet a enim ut, pulvinar tempus elit. Aliquam vel magna in dui dictum suscipit.";
    return(
        <section className='imgTextGroupContainer'>
            <SectionHeader header={headerTitle}/>
            <div className='imgTextGroupFlex'>
                <div className='imgTextGroupFlexItems'>
                    <ImgText source='punch' newsTitle={mock} img={imgs}/>
                </div>
                <div className='imgTextGroupFlexItems'>
                    <ImgText source='punch' newsTitle={mock} img={imgs}/>
                </div>
                <div className='imgTextGroupFlexItems'>
                    <ImgText source='punch' newsTitle={mock} img={imgs}/>
                </div>
                <div className='imgTextGroupFlexItems'>
                    <ImgText source='punch' newsTitle={mock} img={imgs}/>
                </div>
            </div>
        </section>
    )
}

export default ImgTextGroup;