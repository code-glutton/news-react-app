import React from "react";
import "./bigpicture.css"
import Labels from './labels';
import displayImg from '../IMG/IMG-20190303-WA0082.jpg';

function BigPicture(props){
    return (
        <div className="photo">
            <Labels color="red" text="Business"/>
            <h3 style={{minHeight:"30px"}}>{props.header}</h3>
            <div className="headlineImg" style={{minHeight:"340px"}}>
                <img src={displayImg} alt="headline" style={{width:"100%",height:"340px"}}/>
            </div>
        </div>
    )
}

export default BigPicture;