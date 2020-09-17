// in this section you will create the big picture component
// you will also create the individual components for the smaller pictures

import React from "react";
import BigPicture from "./bigPicture";
import SmallComp from "./smallComp";
import SectionHeader from "./sectionHeader";
import "./bigpicturesection.css";

function BigPictureSection(){
    return (
        <section>
            <SectionHeader className="sectionTitle" header={"Top News"}/>
            <div className="bigPicSEC">
            <BigPicture className="bigPic" header="stuff"/>
            <SmallComp className="smallComp"/>
            </div>
        </section>
    )
}

export default BigPictureSection;