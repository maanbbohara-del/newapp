import React from 'react'
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'>
        <ol>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
             <li><Link to='/about'>About</Link></li>
        </ol>
    </div>
  )
}

export default Nav