import React from "react";
import './smallComp.css';

function SmallComp(props){
    return (
        <div id="smallCompMain">
        {props.dataRemain.map(data => 
        <div className="item">
                <h4>
                {data.source.name}
                </h4>
                <p><em>{data.author}</em></p>
                <p>
                   {data.title}
                </p>
            </div>
        )
        }
            
            
        </div>
    )
}

export default SmallComp;