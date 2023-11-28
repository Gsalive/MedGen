import React from 'react';
import { Link } from 'react-router-dom';
import { w } from '../images';


const Eye = () => (
  <Link to="http://127.0.0.1:7000/" style={{ textDecoration: 'none' }}>
     <button
      className="chat-button" 
      style={{
        background: `url(${w})`, 
        backgroundSize: 'cover',
        width: '60px',
        height: '60px', 
        border: 'none',
        cursor: 'pointer',
     
        position: 'fixed',
        top: '90%', 
        left: '38px',
        transform: 'translateY(-50%)', 
       
      }}
    >
     
    </button>
  </Link>
);

export default Eye;
