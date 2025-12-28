import React from 'react'
import './nav.css';

function Nav() {
  return (
    <div className='nav'>
        <ol>
            <li><a href='/home'>Home</a></li>
            <li><a href='/contact'>Contact</a></li>
        </ol>
    </div>
  )
}

export default Nav