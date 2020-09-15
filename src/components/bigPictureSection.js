// in this section you will create the big picture component
// you will also create the individual components for the smaller pictures

import React from "react";
import BigPicture from "./bigPicture";
import SmallComp from "./smallComp";
import "./bigpicturesection.css";

function BigPictureSection(){
    return (
        <section className="bigPicSEC">
            <BigPicture className="bigPic" header="stuff"/>
            <SmallComp className="smallComp"/>
        </section>
    )
}

export default BigPictureSection;