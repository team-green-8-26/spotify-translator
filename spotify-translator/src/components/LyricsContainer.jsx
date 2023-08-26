import React, {useState, useEffect} from 'react';
import '../assets/css/lyrics-container.css';

function LyricsContainer(props){
    return (
        <div className='lyrics-container'>
            <p>{props.language}</p>
        </div>
    )
}

export default LyricsContainer;