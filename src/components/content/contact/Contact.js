 import React from 'react';
 import Contact_style from './Contact.module.css';
 import spoon from '../../../assets/spoon.svg';
 import findus from '../../../assets/findus.png';

function Contact() {
  return(
  <div className={Contact_style.contact_grid}>
    <div className={Contact_style.contact_grid_left} >
        <div >
            <div className={Contact_style.left_name} >Contact</div>
            <img src={spoon} alt='spoon'/>
            <div className={Contact_style.left_title} >Find Us</div>
            <div className={Contact_style.left_text} >Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</div>
            <div className={Contact_style.left_opening} >Opening Hours</div>
            <div>
                <div>Mon - Fri: 10:00 Am - 02:00 Am</div>
                <div>Sat - Sun: 10:00 Am - 03:00 Am</div>
            </div>
            <button>Visit Us</button>
        </div>
    </div>

    <div className={Contact_style.contact_grid_right}>
        <img src={findus} alt='findus'/>
    </div>

  </div>
  )}

export default Contact;
