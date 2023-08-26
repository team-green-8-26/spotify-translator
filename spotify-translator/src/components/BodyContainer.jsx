import React, {useState, useEffect} from 'react';
import '../assets/css/body-container.css';
import LyricsContainer from './LyricsContainer';
import SampleAPIInteractions from './SampleAPIInteractions';

function BodyContainer(){
    return (
        <>
            <div className='body-container'>
                <LyricsContainer language={"hindi"}/>
                <LyricsContainer language={"english"}/>
            </div>
            <SampleAPIInteractions />
        </>
    )
}

export default BodyContainer;