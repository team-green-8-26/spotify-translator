import React, {useState, useEffect} from 'react';
import '../assets/css/lyrics-container.css';

function LyricsContainer(props){
    const [hover, setHover] = useState(false);
    const createLyric = (lyric) => {
        return <li>{lyric["timestamps"]} {lyric["lines"]}</li>
    }

    return (
        <div className='lyrics-container'>
            <h2>{props.language}</h2>
            <ul>
                {
                    props.lyrics.map((lyric) => {
                        createLyric(lyric)
                    })
                    
                }
            </ul>
            
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                Hover over me!
            </button>
            {hover && (
                <div>
                    magic carpet
                </div>
            )}

        </div>
    )
}

export default LyricsContainer;