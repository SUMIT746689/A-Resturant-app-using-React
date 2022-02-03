import React from 'react';
import spoon from '../../../assets/spoon.svg'

function Wellcome({title,button}) {
  return(
  <>
        <div className='top'>{title}</div>
        <img src={spoon} alt="spoon"/>
        <center>The key to fine dining</center>
        <div className='bottom'>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</div>
        <button>{button}</button>
  </>
  )};

export default Wellcome;
