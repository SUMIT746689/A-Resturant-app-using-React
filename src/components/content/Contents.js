import React from 'react';
import wellcome from '../../assets/welcome.png';
import knife from '../../assets/knife.png';
import g from '../../assets/G.png';
import contents_style from './Contents.module.css';
import Wellcome from './wellcome/Wellcome';
import History from './history/History';
import ChefWord from './chef_word/ChefWord';
import Vedio from './vedio/Vedio';
import Awards from './awards/Awards';
import Contact from './contact/Contact';
import Newsletter from './newsletter/Newsletter';


function Contents() {
  return (
  <div className={contents_style.contents}>
    <div className={contents_style.contents_wellcome}>
      <div className={contents_style.wellcome_text}>
        <Wellcome title='Chase The New Flavour' button='Explore Menu'/>
      </div>
      <div className={contents_style.wellcome_slide_image}>
        <img src={wellcome} alt='wellcome' className={contents_style.wellcome_image} />
      </div>
    </div>

    <div className={contents_style.about}>
      <div className={contents_style.about_text_left}>
        <Wellcome title='About Us' button="Know More"/>
      </div>
      <div className={contents_style.about_image}>
        <img src={knife} alt='knife'/>
      </div>
      <div className={contents_style.about_text_right}>
        <Wellcome title='Our History' button='Know More'/>
      </div>
      <div className={contents_style.about_background}>
      <img src={g} alt='g'/>
      </div>
    </div>
    
    <div className={contents_style.history}>
      <History/>
    </div>
    <div className={contents_style.ChefWord}>
      <ChefWord/>
    </div>
    <div className={contents_style.vedio} >
      <Vedio/>
    </div>
    <div>
      <Awards/>
    </div>
    {/* <div>
      <PhotoGallery/>
    </div> */}
    <div>
      <Contact/>
    </div>
    <div>
      <Newsletter/>
    </div>
    
  </div>
  )}

export default Contents;