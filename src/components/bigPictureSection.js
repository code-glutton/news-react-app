// in this section you will create the big picture component
// you will also create the individual components for the smaller pictures

import React from "react";
import BigPicture from "./bigPicture";
import SmallComp from "./smallComp";
import SectionHeader from "./sectionHeader";
import "./bigpicturesection.css";
import {useSelector} from 'react-redux';

function BigPictureSection(){
    const breakingSelectorInit = (state) => state.breaking[0];
    const breakingSelectorRemain = (state) => state.breaking.slice(1,7);
    const selectedBreaking = useSelector(breakingSelectorInit);
    const selectedBreakingRemain = useSelector(breakingSelectorRemain);
    console.log(selectedBreaking)

    return (
        <section>
            <SectionHeader className="sectionTitle" header={"Top News"}/>
            <div className="bigPicSEC">
            <BigPicture className="bigPic" header="stuff" dataInit={selectedBreaking}/>
            <SmallComp className="smallComp" dataRemain={selectedBreakingRemain}/>
            </div>
        </section>
    )
}

export default BigPictureSection;