import React from 'react';
import "./sectionHeader.css"

function SectionHeader(props){
    return (
        <div className="sectionHead">
            <div className="header">
                <p>{props.header}</p>
            </div>
            <div className="hr">
            </div>
        </div>
    )
}

export default SectionHeader;