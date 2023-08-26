import React, {useState, useEffect} from 'react';
import '../assets/css/body-container.css';
import LyricsContainer from './LyricsContainer';
import PlayerContainer from './PlayerContainer';
import FlagContainer from './FlagContainer';

const lyrics = [
    [1.01, "one", 1],
    [2.20, "two", 1],
    [3.31, "three", 2]
]

function BodyContainer(){
    const [showFlag, setShowFlag] = useState(false);
    const [selectedLyric, setSelectedLyric] = useState(null);
    const updateShowFlag = (lyric) => {
        setShowFlag(!showFlag);
        setSelectedLyric(lyric);
    }
    return (
        <div className='body-container'>
            <PlayerContainer />
            <LyricsContainer language={"hindi"} lyrics={lyrics}/>
            <LyricsContainer language={"english"} lyrics={lyrics} updateShowFlag={updateShowFlag}/>
            { showFlag && 
                <FlagContainer lyric={selectedLyric}/>
            }
        </div>
    )
}

export default BodyContainer;