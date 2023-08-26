import React, {useState, useEffect} from 'react';
import '../assets/css/lyrics-container.css';
import { FaBeer } from 'react-icons/fa';

function FlagContainer(props){
    return (
        <div className='flag-container'>
            <h2><FaBeer /></h2>
        </div>
    )
}

export default FlagContainer;