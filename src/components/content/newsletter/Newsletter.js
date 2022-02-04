import Newsletter_style from './Newsletter.module.css';
import spoon from '../../../assets/spoon.svg';
import gerich from '../../../assets/gericht.png';
import { FiFacebook,FiInstagram,FiTwitter } from 'react-icons/fi';


function Newsletter() {
  return(
    <div className={Newsletter_style.Newsletter} >
      <div className={Newsletter_style.Newsletter_grid}>
          <div className={Newsletter_style.Newsletter_grid_name} >Newsletter</div>
          <img src={spoon} alt='spoon'/>
          <div className={Newsletter_style.Newsletter_grid_title} >Subscribe To Our Newsletter</div>
          <div className={Newsletter_style.Newsletter_grid_text} >And Never Miss Latest Updates!</div>
            <div className={Newsletter_style.Newsletter_grid_form}>
                <input />
                <div>
                    <button>Subscribe</button>
                </div>
            </div>
      </div>
      
      <div className={Newsletter_style.footer}>
        <div className={Newsletter_style.footer_top} > 
          <div className={Newsletter_style.footer_name}>Contact Us</div>
          <div>9 W 53rd St, New York, NY 10019, USA</div>
          <div>+1 212-344-1230 <br/>+1 212-555-1230</div>
        </div>
        <div className={Newsletter_style.footer_center}>
          <img  src={gerich} alt='gerich'/>
          <div className={Newsletter_style.footer_text}>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others.”</div>
          <div>
            <img src={spoon} alt='spoon'/>
          </div>
          <div  >
            <FiFacebook className={Newsletter_style.footer_center_icon} />
            <FiInstagram className={Newsletter_style.footer_center_icon} />
            <FiTwitter className={Newsletter_style.footer_center_icon} />
          </div>

        </div>
        <div className={Newsletter_style.footer_bottom} >
          <div className={Newsletter_style.footer_name}>Working Hours</div>
          <div>Monday-Friday:<br></br> 08:00 Am -12:00 Am</div>
          <div>Saturday-Sunday:<br/>07:00am -11:00 Pm</div>
        </div>
      </div>

      <div className={Newsletter_style.last} >
          2021 Gerícht. All Rights Reserved.
      </div>

    </div>
  )};

export default Newsletter;
