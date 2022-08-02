import React, { useRef, useState } from 'react';
import vedio_style from './Vedio.module.css';
import meal from '../../../assets/meal.mp4';
import {IoMdPlay,IoMdPause} from 'react-icons/io';

function Vedio() {

  const [press,setpress]=useState(false);
  let videoRef = useRef(null);

    const playFunction = ()=>{
      videoRef.current.play();
    }
    const pauseFunction = ()=>{
      videoRef.current.pause();
    }
  
  return(
    <div className={vedio_style.videos} >

      <video  
      src={meal} 
      alt ='meal.mp4'
      ref={videoRef}
      loop
      />

      <div className={vedio_style.meal_vedio_icons}
      onClick={()=>setpress(press=>!press)}
      >
        <div>
          {
            !press ? <IoMdPlay onClick={playFunction} className={vedio_style.meal_vedio_playicon}  /> : <IoMdPause onClick={pauseFunction}  className={vedio_style.meal_vedio_pauseicon}  />
          }
        </div>
      </div>
    </div>     
)}

export default Vedio;
