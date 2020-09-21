import React from 'react';
import './smallImageSection.css';
import SectionHeader from './sectionHeader';
import imageTest from '../IMG/IMG-20190303-WA0082.jpg';
import "./imgTextSection.css"
export default function ImgTextSection(){
    
return (
    <section>
        <SectionHeader className="sectionTitle" header={"Business"}/>
            <div className="smally">
            
                <div className="first">
                <figure>
                    <img src={imageTest} alt="people voting" style={{width:"100%", height:"200px"}}/>
                    <figcaption>
                        osas
                    </figcaption>
                </figure>
                <figure>
                    <img src={imageTest} alt="people voting" style={{width:"100%", height:"200px"}}/>
                    <figcaption>
                        osas
                    </figcaption>
                </figure>
                </div>

                <div className="second">
                    <figure>
                        <img src={imageTest} alt="people voting" style={{width:"100%", height:"200px"}}/>
                        <figcaption>
                            osas
                        </figcaption>
                    </figure>
                    <figure>
                    <img src={imageTest} alt="people voting" style={{width:"100%", height:"200px"}}/>
                    <figcaption>
                        osas
                    </figcaption>
                </figure>
                </div>
            </div>
    </section>
)
}