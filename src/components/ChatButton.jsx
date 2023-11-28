import React from 'react';
import { Link } from 'react-router-dom';
import { myGif } from '../images';


const ChatButton = () => (
  <Link to="http://127.0.0.1:5000/" style={{ textDecoration: 'none' }}>
     <button
      className="chat-button" 
      style={{
        background: `url(${myGif})`, 
        backgroundSize: 'cover',
        width: '90px',
        height: '90px', 
        border: 'none',
        cursor: 'pointer',
     
        position: 'fixed',
        top: '90%', 
        right: '20px',
        transform: 'translateY(-50%)', 
       
      }}
    >
     
    </button>
  </Link>
);

export default ChatButton;
