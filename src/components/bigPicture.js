import React from "react";
import "./bigpicture.css"

function BigPicture(props){
    return (
        <div className="photo">
            <h3 style={{minHeight:"30px"}}>{props.dataInit.source.name}</h3>
            <p><em>{props.dataInit.author}</em></p>
            <p>{props.dataInit.title}</p>
            <div className="headlineImg" style={{minHeight:"340px"}}>
                <img src={props.dataInit.urlToImage} alt="headline" style={{width:"100%",height:"340px"}}/>
            </div>
        </div>
    )
}

export default BigPicture;