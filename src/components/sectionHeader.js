import React from 'react';
import "./sectionHeader.css"

function SectionHeader({header}){
    return (
        <div className="sectionHead">
            <div className="header">
                <p>{header}</p>
            </div>
            <div className="hr">
            </div>
        </div>
    )
}

export default SectionHeader;