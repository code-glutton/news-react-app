import React from 'react';

function Labels(props){
    return(
        <div style={{backgroundColor:props.color, width:"70px", height:"30px", fontSize:"14px", paddingTop:"5px", paddingLeft:"8px", fontWeight:"bold"}}>
            <p>{props.text}</p>
        </div>
    )
}

export default Labels;