import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'
import './smallTalk.css';

function SmallTalk({source,newsTitle}){
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)
    return (
        <div className="smallTalkContainer">
            <div className="smallTalkTitle">
                <strong>
                    <ResponsiveEllipsis
                        text={newsTitle}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'/>
                </strong></div>
            <p className="smallTalkSource"><em>{source}</em></p>
        </div>
    )
}

export default SmallTalk;