import React, {useState, useEffect} from 'react';
import '../assets/css/footer-container.css';

const goofyimg = "https://designshack.net/wp-content/uploads/passion-frog2.jpg"

function FooterContainer(){
    return (
        <div className='footer-container'>
            <img src={goofyimg} alt="Image of a frog on a backdrop of a blue sky labeled 'Graphic design is my passion'"/>
        </div>
    )
}

export default FooterContainer;