import React, {useState, useEffect} from 'react';
import '../assets/css/lyrics-container.css';

function LyricsContainer(props){

    return (
        <div className='lyrics-container'>
            <h2>{props.language}</h2>
        </div>
    )
}

export default LyricsContainer;