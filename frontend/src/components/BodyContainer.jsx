import React, {useState, useEffect} from 'react';
import '../assets/css/body-container.css';
import LyricsContainer from './LyricsContainer';
import PlayerContainer from './PlayerContainer';
import FlagContainer from './FlagContainer';

function BodyContainer(){
    return (
        <div className='body-container'>
            <PlayerContainer />
            <LyricsContainer language={"hindi"}/>
            <LyricsContainer language={"english"}/>
            <FlagContainer lineNumber={5}/>
        </div>
    )
}

export default BodyContainer;