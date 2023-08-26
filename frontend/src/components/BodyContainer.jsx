import React, {useState, useEffect} from 'react';
import '../assets/css/body-container.css';
import LyricsContainer from './LyricsContainer';
import PlayerContainer from './PlayerContainer';
import FlagContainer from './FlagContainer';

const lyrics = [
    [1, "one"],
    [2, "two"],
    [3, "three"]
]

function BodyContainer(){
    return (
        <div className='body-container'>
            <PlayerContainer />
            <LyricsContainer language={"hindi"} lyrics={lyrics}/>
            <LyricsContainer language={"english"} lyrics={lyrics}/>
            <FlagContainer lineNumber={5}/>
        </div>
    )
}

export default BodyContainer;