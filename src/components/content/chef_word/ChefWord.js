import React from 'react';
import ChefWord_style from './ChefWord.module.css';
import chef_image from '../../../assets/chef.png';
import spoon from '../../../assets/spoon.png';
import sign from '../../../assets/sign.png';
import quote from '../../../assets/quote.png';

function ChefWord() {
  return( 
  <div className={ChefWord_style.chefword_grid}>
    <div className={ChefWord_style.chefword_image}>
        <img src={chef_image} alt='chef_Image' />
    </div>
    <div className={ChefWord_style.chefword_latter}>
        <div>
            <p className={ChefWord_style.chefword_title}>
                Chef's Word
            </p>
            <img src={spoon} alt ='spoon'/>
            <h1>What We Belive In</h1>
            <div className={ChefWord_style.chefword_passage}>
                <div>
                    <img src={quote} alt={quote} />
                    <p> Lorem Ipsum Dolor Sit Amet,
                 Consectetur Adipiscing Elit 
                 Auctor Sit .</p>
                </div>
                <p>Auctor Sit Iaculis 
                In Arcu. Vulputate Nulla Lobortis Mauris Eget 
                 Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat,
                 Aliquam Molestie Lectus Eu. Congue Iaculis 
                 Integer Curabitur Semper Sit Nunc.
                </p>
            </div>
            <p className={ChefWord_style.chefword_name}>Kelvin Luo</p>
            <p className={ChefWord_style.chefword_position} >Chef & Founder</p>
            <img src={sign} alt='sign' className={ChefWord_style.chefword_sign} />
        </div>
    </div>
        
  </div>

  )};

export default ChefWord;
