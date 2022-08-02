import React, { useState } from 'react';
import PhotoGallery_style from './PhotoGallery.module.css';
import spoon from '../../../assets/spoon.svg';
import { AiOutlineInstagram,AiOutlineArrowRight,AiOutlineArrowLeft } from 'react-icons/ai';

function PhotoGallery() {
  const [imageId,setImageId]=useState(1);
  const [images,setImages] = useState(
  [ 
    {
      id:1,
      imageUrl:'./assets/gallery01.png'
    },
    {
      id:2,
      imageUrl:'./assets/gallery02.png'
    },
    {
      id:3,
      imageUrl:'./assets/gallery03.png'
    },
    {
      id:4,
      imageUrl:'./assets/gallery04.png'
    },
]);

  const handleImagesLeft = () => {
    setImageId(()=>imageId === 1 ? 4 : imageId-1)
  }
  console.log(imageId)
  const handleImagesRight = () => {
    setImageId(()=>imageId === 4 ? 1 : imageId+1)
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
        
        <div className={ PhotoGallery_style.PhotoGallery_right_left} >
          <div>
            <AiOutlineArrowLeft className={PhotoGallery_style.PhotoGallery_right_left_icon} onClick={handleImagesLeft}/>
          </div>
        </div>
        
        <div className={PhotoGallery_style.sliders} >
            {
              images.map(({imageUrl,id},index)=>(<div key={index} className={PhotoGallery_style.right_slider} >
                <img className={ imageId ===id ?  PhotoGallery_style.active : PhotoGallery_style.right_slider_image} src={imageUrl} alt={imageUrl}/>
                <AiOutlineInstagram className={PhotoGallery_style.right_slider_instagram}/>
              </div>))
            }
        </div>

        <div className={PhotoGallery_style.PhotoGallery_right_right} >
          <div >
            <AiOutlineArrowRight className={PhotoGallery_style.PhotoGallery_right_right_icon} onClick={handleImagesRight} />
          </div>
        </div>
        
    </div>
  </div>
  
)}

export default PhotoGallery;
