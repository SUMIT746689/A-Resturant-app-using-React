import React,{useState} from 'react';
import header_style from './Header.module.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';


function Header() {
    const [display_Responsive_Menu,setDisplay_Responsive_Menu]=useState(false);
  return (
<>
   {
    !display_Responsive_Menu ?
    <div className={header_style.head}>
       <div className={header_style.head_content}>
        <div className={header_style.brand}>
            <h3>Sultan Dine</h3>
        </div>
        <div className={header_style.menu}>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Awards</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
        <div className={header_style.auth}>
            <ul>
                <li className={header_style.list_margin}><a>Log In/Register</a></li>
                <li><a>Book Table</a></li>
            </ul>
            
        </div>

        <div className={header_style.menuIcon}>
        <GiHamburgerMenu onClick={()=>{setDisplay_Responsive_Menu(!display_Responsive_Menu)}}/>
        </div>
        
    </div>
    </div>
    :
    <div className={header_style.responsive_Menu}>
        <div className={header_style.responsive_Menu_Exit}>
            <MdOutlineRestaurantMenu onClick={()=>{setDisplay_Responsive_Menu(!display_Responsive_Menu)}}/>    
        </div>
        <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Menu</a></li>
            <li><a>Awards</a></li>
            <li><a>Contact</a></li>
        </ul>
    </div>
   }
</>);}

export default Header;
