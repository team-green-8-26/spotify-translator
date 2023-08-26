import React, {useState, useEffect} from 'react';
import '../assets/css/flag-container.css';
import { FaFlag } from 'react-icons/fa';

function FlagContainer(props){
    const [feedback, setFeedback] = useState('');
    const [showSuggesstionBox, setShowSuggestionBox] = useState(false);

    const submitFeedback = () => {
        console.log(feedback);
        console.log(props.lyric);
        if(feedback && feedback != "" && props.lyric)
            alert("Feedback for line "+props.lyric[2]+" : "+feedback);
        else{
            alert("Please select a lyric and enter a feedback!");
        }
    }

    return (
        <div className='flag-container'>
            <div className='feedback-container'>
                <FaFlag onClick={() => setShowSuggestionBox(!showSuggesstionBox)} />
                { showSuggesstionBox && 
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