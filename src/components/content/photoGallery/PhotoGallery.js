import React, { useState } from 'react';
import PhotoGallery_style from './PhotoGallery.module.css';
import spoon from '../../../assets/spoon.svg';
import { AiOutlineInstagram,AiOutlineArrowRight,AiOutlineArrowLeft } from 'react-icons/ai';

function PhotoGallery() {
  const [images,setImages] = useState(
  [
    {imageUrl:'./assets/gallery01.png'},
    {imageUrl:'./assets/gallery02.png'},
    {imageUrl:'./assets/gallery03.png'},
    {imageUrl:'./assets/gallery04.png'},
  ]);

  console.log(images) ;

  const handleImagesLeft = () => {

  }

  const handleImagesRight = () => {

  }

  return( 
  <div className={PhotoGallery_style.PhotoGallery_grid}>
    <div className={PhotoGallery_style.PhotoGallery_left} >
        <div className={PhotoGallery_style.PhotoGallery_name} >Instagram</div>
        <img src={spoon} alt='spoon'/>
        <div className={PhotoGallery_style.PhotoGallery_title} >Photo Gallery</div>
        <div className={PhotoGallery_style.PhotoGallery_text} >Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</div>
        <button> View More</button>
    </div>
    <div className={PhotoGallery_style.PhotoGallery_right} >
        
        <div className={PhotoGallery_style.PhotoGallery_right_left} >
          <div>
            <AiOutlineArrowLeft onClick={handleImagesLeft}/>
          </div>
        </div>
        
        <div className={PhotoGallery_style.PhotoGallery_right_sliders} >
          {
            images.map(({imageUrl},index)=>(<div key={index} className={PhotoGallery_style.PhotoGallery_right_slider} >
              <img src={imageUrl} alt={imageUrl}/>
              <AiOutlineInstagram className={PhotoGallery_style.PhotoGallery_right_slider_instagram}/>
            </div>))
          }
        </div>

        <div className={PhotoGallery_style.PhotoGallery_right_right} >
          <div >
            <AiOutlineArrowRight onClick={handleImagesRight} />
          </div>
        </div>
        
    </div>
  </div>
  
)}

export default PhotoGallery;
