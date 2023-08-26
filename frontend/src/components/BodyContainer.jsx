import React, {useState, useEffect} from 'react';
import '../assets/css/body-container.css';
import LyricsContainer from './LyricsContainer';
import FlagContainer from './FlagContainer';

import originalLyrics from "./database/nainowale-ne.txt"

const lyrics = [
    ["one", 1],
    ["two", 1],
    ["three", 2]
]

function BodyContainer(){
    const [selectedLyric, setSelectedLyric] = useState(null);
    const updateShowFlag = (lyric) => {
        setSelectedLyric(lyric);
    }
    return (
        <div className='body-container'>
            <LyricsContainer language={"Original"} lyrics={lyrics}/>
            <LyricsContainer language={"English"} lyrics={lyrics} updateShowFlag={updateShowFlag}/>
            <FlagContainer lyric={selectedLyric}/>
        </div>
    )
}

export default BodyContainer;