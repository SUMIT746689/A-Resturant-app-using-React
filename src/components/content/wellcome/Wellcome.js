import React from 'react';
import spoon from '../../../assets/spoon.svg';
import contents_styles from '../Contents.module.css'

function Wellcome({title,button}) {
  return(
  <>
        <div className={contents_styles.top}>{title}</div>
        <img src={spoon} alt="spoon"/>
        <center className={contents_styles.center}>The key to fine dining</center>
        <div className={contents_styles.bottom}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</div>
        <button>{button}</button>
  </>
  )};

export default Wellcome;
