import React, { useRef, useState } from 'react';
import vedio_style from './Vedio.module.css';
import meal from '../../../assets/meal.mp4';
import {IoMdPlay,IoMdPause} from 'react-icons/io';

function Vedio() {

  const [press,setpress]=useState(false);
  let videoRef = useRef();

  const vedioControl=(e)=>{
    console.log(press);
    if(!press){
      videoRef.current.play();
    }
    else{
      videoRef.current.pause();
    }
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
      onClick={()=>vedioControl(setpress(press=>!press))}
      >
        <div>
          {
            !press ? <IoMdPlay className={vedio_style.meal_vedio_playicon}  /> : <IoMdPause  className={vedio_style.meal_vedio_pauseicon}  />
          }
        </div>
      </div>
    </div>     
)}

export default Vedio;
