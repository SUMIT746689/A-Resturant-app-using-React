import React from 'react';
import awards_style from './Awards.module.css';
import laurel from '../../../assets/laurels.png';
import spoon from '../../../assets/spoon.svg';
import Laurels from './laurels/Laurels';
function Awards() {

  const items = [{
    id:1,
    imageUrl : 'assets/award01.png',
    imageTitle : 'Bib Gourmond',
    imageText : 'Lorem Ipsum Dolor Sit Amet, Consectetur.'
  },
  {
    id:2,
    imageUrl : 'assets/award02.png',
    imageTitle : 'Rising Star',
    imageText : 'Lorem Ipsum Dolor Sit Amet, Consectetur.'
  },
  {
    id:3,
    imageUrl : 'assets/award03.png',
    imageTitle : 'AA Hospitality',
    imageText : 'Lorem Ipsum Dolor Sit Amet, Consectetur.'
  },
  {
    id:4,
    imageUrl : 'assets/award05.png',
    imageTitle : 'Outstanding Chef',
    imageText : 'Lorem Ipsum Dolor Sit Amet, Consectetur.'
  },
  
]

  return(
      <div className={awards_style.awards_grid}>
        <div className={awards_style.awards_grid_left} >
          <div>
            <p>Awards & Recognition</p>
            <img src={spoon} alt='spoon'/>
            <div className={awards_style.awards_grid_left_heading}>
              Our Laurels
            </div>
             
            <div className={awards_style.laurels}>
              {items.map((item,index)=><Laurels key={index} item={item}/>)}
            </div>
          </div>
        </div>

        <div className={awards_style.awards_grid_right}>
          <img  src={laurel} alt='laurel'/>
        </div>
      </div>
  )}

export default Awards;
