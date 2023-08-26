import React, {useState, useEffect} from 'react';
import '../assets/css/body-container.css';
import LyricsContainer from './LyricsContainer';

function BodyContainer(){
    return (
        <div className='body-container'>
            <LyricsContainer language={"hindi"}/>
            <LyricsContainer language={"english"}/>
        </div>
    )
}

export default BodyContainer;