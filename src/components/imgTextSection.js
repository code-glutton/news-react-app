import React from 'react';
import './smallImageSection.css';
import SectionHeader from './sectionHeader';
import "./imgTextSection.css";

export default function ImgTextSection(props){ 
return (
    <section>
        <SectionHeader className="sectionTitle" header={"Business"}/>
            <div className="smally">
            
                <div className="first">
                {props.sectionOneData.map(data => 
                <figure>
                    <div style={{width:"100%", minHeight:"200px"}}>
                    <img src={data.urlToImage} alt="people voting" style={{width:"100%", height:"200px"}}/>
                    </div>
                    <figcaption>
                    <h4>
                        {data.source.name}
                    </h4>
                    <p><em>{data.author}</em></p>
                    <p className="line-clamp line-clamp-5">
                        {data.title}
                    </p>
                    </figcaption>
                </figure>)}
                </div>

                <div className="second">
                {props.sectionTwoData.map(data => 
                <figure>
                    <div style={{width:"100%", minHeight:"200px"}}>
                        <img src={data.urlToImage} alt="people voting" style={{width:"100%", height:"200px"}}/>
                    </div>
                    <figcaption>
                        <h4>
                            {data.source.name}
                        </h4>
                        <p>
                            <em>{data.author}</em>
                        </p>
                        <p>
                            {data.title}
                        </p>
                    </figcaption>
                </figure>)}
                </div>
            </div>
    </section>
)
}