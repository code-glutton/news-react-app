import React from "react";
import "./headerComponent.css";

function HeaderComponent({title}){
    return(
        <div className="headerContainer">
            <h1 className="headerTitle">{title}</h1>
            <div className="headerDiv"></div>
        </div>
    )
}

export default HeaderComponent;