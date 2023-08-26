import React, {useState, useEffect} from 'react';
import '../assets/css/lyrics-container.css';

function LyricsContainer(props){
    const [selectedSentenceNumber, setSelectedSentenceNumber] = useState(false);
    const createLyric = (lyric) => {
        return <li onClick={() => handleLyricClick(lyric)} className={(selectedSentenceNumber == lyric[2])?'highlighted':''}>{lyric[0]} {lyric[1]}</li>
    }

    const handleLyricClick = (lyric) => {
        if (props.updateShowFlag) {
            setSelectedSentenceNumber(lyric[2]);
            props.updateShowFlag(lyric)
        }
    }

    return (
        <div className='lyrics-container'>
            <h2>{props.language}</h2>
            <ul>
                {
                    props.lyrics.map((lyric) => {
                        return createLyric(lyric)
                    })
                }
            </ul>
        </div>
    )
}

export default LyricsContainer;