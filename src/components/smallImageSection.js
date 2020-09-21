import React from "react";
import SectionHeader from "./sectionHeader";
import {useSelector} from 'react-redux';
import "./smallImageSection.css";

function SmallImageSection(){

    const sportSelectorInit = (state) => state.sports.slice(0,4);
    const sportSelectorLater = (state) => state.sports.slice(5,9);
    const sportInit = useSelector(sportSelectorInit);
    const sportLater = useSelector(sportSelectorLater);

    return (
        <section>
            <SectionHeader className="sectionTitle" header={"Sports"}/>
            <div className="smally">
            
                <div className="first">
                {sportInit.map(data => 
                <div className="item">
                <h4>
                {data.source.name}
                </h4>
                <p><em>{data.author}</em></p>
                <p>
                   {data.title}
                </p>
                    </div>)}
                </div>

                <div className="second">
                {sportLater.map(data => 
                <div className="item">
                <h4>
                {data.source.name}
                </h4>
                <p><em>{data.author}</em></p>
                <p>
                   {data.title}
                </p>
                    </div>)}
                </div>
            </div>
        </section>
    )
}

export default SmallImageSection