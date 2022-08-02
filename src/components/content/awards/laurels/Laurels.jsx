import React from 'react';
import Awards_style from '../Awards.module.css';

function Laurels(props) {

   console.log(props)
   
  return (
      <div className={Awards_style.Laurels_card}>
           
          <div className={Awards_style.Laurels_card_top} >
            <img src={props.item.imageUrl} alt='im'/>   
          </div>

          <div className={Awards_style.Laurels_card_bottom} >
            <div className={Awards_style.Laurels_card_bottom_title}>
                {props.item.imageTitle}
            </div>
            <div>
                {props.item.imageText}
            </div>
          </div>
      </div>
  )}

export default Laurels;
