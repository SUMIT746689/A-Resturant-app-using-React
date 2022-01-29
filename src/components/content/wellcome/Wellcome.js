import React from 'react';
import spoon from '../../../assets/spoon.svg'

function Wellcome({title,button}) {
  return(
  <>
        <top>{title}</top>
        <img src={spoon} alt="spoon"/>
        <center>The key to fine dining</center>
        <bottom>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</bottom>
        <button>{button}</button>
  </>
  )};

export default Wellcome;
