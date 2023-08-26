import React, {useState, useEffect} from 'react';
import '../assets/css/body-container.css';
import LyricsContainer from './LyricsContainer';
import FlagContainer from './FlagContainer';
import axios from "axios";

const lyrics = [
    [1.01, "one", 1],
    [2.20, "two", 1],
    [3.31, "three", 2]
]

function BodyContainer(){
    const [selectedLyric, setSelectedLyric] = useState(null);
    const [englishLyrics, setEnglishLyrics] = useState({});
    const [originalLyrics, setOriginalLyrics] = useState({});
    useEffect(() => {
        let englishLyrics, originalLyrics;
        async function fetchLyrics(){
            englishLyrics = await axios.get('')
        }
        fetchLyrics();
    }, []);
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