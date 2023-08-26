import React, {useState, useEffect} from 'react';
import '../assets/css/player-container.css';

function PlayerContainer(props){

    return (
        <div className='player-container'>
            <p>{props.language}</p>
        </div>
    )
}

export default PlayerContainer;