import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <div  className='header-container'>
        <div className="header">
           <div className='header-logo'>
               Xpensify <i className="fi fi-rr-credit-card"></i>
           </div>
           <div className='header-button'>
            <a href = 'https://github.com' target="_blank" rel='noopener norefer'>
                
            <i className="devicon-github-original"></i> Star
          
            </a>
           </div>
            
        </div>

      
    </div>
  )
}

export default Header;
