import React from 'react'
import './Navbar.css'
import logo from '../assets/img/logo.png';
import menuIcon from '../assets/img/menu.svg';


const Navbar = ({btn}) => {
  return (
    
    <header>
        <nav>
        <img src={logo} alt="logo flora" />  

        <div className="nav-items">
        <ul> 
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>New Property</li>
        <li>Contact</li>
        </ul>   
        </div>
        <button className='login'>{btn}</button>
        
        <button className='menubtn'> <img src={menuIcon} alt=''/> </button>

           </nav>
    </header>
   
  )
}

export default Navbar