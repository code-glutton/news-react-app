import React from 'react';
import './bigScreen.css';
import {useHistory} from 'react-router-dom';

function BigScreen({data,passArticle}){
    const history = useHistory();

    const onPress = (dataText,dataImg) => {
        passArticle(dataText,dataImg);
        history.push('/article');
    }

    return(
        <div className='BigScreenContainer' onClick={() => {onPress(data.content,data.urlToImage)}}>
            <img src={data.urlToImage} alt='big' className='BigScreenImage'/>
        </div>
    )
}

export default BigScreen;