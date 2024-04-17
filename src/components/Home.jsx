import React, { useState } from 'react';
import axios from 'axios';
import "./Home.css"

function Home() {
    const [inputText, setInputText] = useState('');
    const [completedText, setCompletedText] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const Completion = async () => {
        try {
            const response = await axios.post('http://localhost:8000/complete', { userPrompt: inputText });


            setCompletedText(response.data.completedText);
        } catch (error) {
            console.error('Error completing text:', error);
        }
    };

    const Summarize = async () => {
        try {
            const response = await axios.post('http://localhost:8000/summarize', { userPrompt: inputText });
            setCompletedText(response.data.completedText);
        } catch (error) {
            console.error('Error summarizing text:', error);
        }
    };

    const Answer = async () => {
        try {
            const response = await axios.post('http://localhost:8000/answer', { userPrompt: inputText });
            setCompletedText(response.data.completedText);
        } catch (error) {
            console.error('Error answering text:', error);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div className="App">
            <h1 style={{ marginLeft: '620px', color: 'black' }}>OpenAI</h1>
            <img style={{ width: '100px', marginLeft: '740px', marginTop: '-88px' }} src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png" alt="" />
            <textarea

            id='rr'
                placeholder=" text..."
                value={inputText}
                onChange={handleChange}
                className='form-control border border-5'
                style={{ marginLeft: '400px', width: '700px' }}
            />
            <br />
            <br />
            <div style={{ marginLeft: '480px' }}>
                <div className="dropdown" style={{ display: 'inline-block' }}>
                    <button   style={{marginLeft:'200px',color:'whitesmoke',backgroundColor:'black'}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={dropdownOpen ? 'true' : 'false'}>
                        Actions
                    </button>
              
                    <div style={{marginLeft:'180px'}} className={dropdownOpen ? "dropdown-menu show" : "dropdown-menu"} aria-labelledby="dropdownMenuButton">
                        <button style={{color:'black'}} className="dropdown-item" onClick={Completion}>Complete Text</button>
                        <button  style={{color:'black'}} className="dropdown-item" onClick={Summarize}>Summarize Text</button>
                        <button  style={{color:'black'}} className="dropdown-item" onClick={Answer}>Answer Question</button>
                    </div>
                </div>
            </div>
            <div>
                <br />
                <br />
                <br />
                <br />
          <br />
          
                <h2 style={{ color: 'black', marginLeft: '650px' }}>AI Output:</h2>
                <p className='border border-2 p-3' style={{ marginLeft: '480px', height: '140px', width: '500px' }}>{completedText}</p>
            </div>
        </div>
    );
}

export default Home;
