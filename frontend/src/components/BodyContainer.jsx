import React, {useState, useEffect} from 'react';
import '../assets/css/body-container.css';
import LyricsContainer from './LyricsContainer';
import FlagContainer from './FlagContainer';

const lyrics = [
    [1.01, "one", 1],
    [2.20, "two", 1],
    [3.31, "three", 2]
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