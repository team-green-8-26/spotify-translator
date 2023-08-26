import React, {useState, useEffect} from 'react';
import '../assets/css/footer-container.css';

const raccoon = "https://designshack.net/wp-content/uploads/passion-raccoon.jpg"

function FooterContainer(){
    return (
        <div className='footer-container'>
            <img src={raccoon} alt="Image of a raccoon on an ocean background labeled 'Graphic design is my passion'"/>
        </div>
    )
}

export default FooterContainer;