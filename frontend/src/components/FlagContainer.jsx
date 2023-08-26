import React, {useState, useEffect} from 'react';
import '../assets/css/flag-container.css';
import { FaFlag } from 'react-icons/fa';

function FlagContainer(props){
    const [feedback, setFeedback] = useState('');
    const [showSuggestionBox, setShowSuggestionBox] = useState(false);

    const submitFeedback = () => {
        if(feedback && feedback != "")
            alert("Feedback for line "+props.lyric[2]+" : "+feedback);
    }

    return (
        <div className='flag-container'>
            <div className='feedback-container'>
                <FaFlag onClick={() => setShowSuggestionBox(!showSuggestionBox)} />
                { showSuggestionBox && 
                    <>
                        <textarea placeholder="Enter your suggestion" rows="5" cols="30" className='suggestion-box' onChange={(e) => {setFeedback(e.target.value)}}></textarea>
                        <button onClick={submitFeedback} className='submit-feedback-button'>Submit</button>
                    </>
                }
            </div>
        </div>
    )
}

export default FlagContainer;