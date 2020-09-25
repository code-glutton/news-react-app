import React from "react";
import SmallTalk from "../smallTalkComponent/smallTalk";
import './imgText.css';


function ImgText({source,newsTitle,img}){
    return(
        <div className="imgTextContainer">
            <div className="imgTextPicture">
                <img src={img} className="imgTextImg"/>
            </div>
            <SmallTalk source={source} newsTitle={newsTitle}/>
        </div>
    )
}

export default ImgText