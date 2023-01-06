import React from 'react'
import "./footer.css"
import {HiMail,HiPhone} from "react-icons/hi";
import {GrInstagram} from "react-icons/gr";
import {BsFacebook,BsLinkedin,BsTwitter,BsYoutube} from "react-icons/bs";
import {FaDiscord} from "react-icons/fa"

function handleOver(classe){
  // document.querySelector("."+classe).classList.add("scale-up-center");
  alert("scaleup");
}
function handleOut(classe){
  // document.querySelector("."+classe).classList.add("scale-down-center");
  alert("scaleup");
}


const Footer = () => {
  return (
    
  <div className='ecell__foot'>
    <div className="ecell__footer">
    
    <div className="ecell__footer-contactus">
    

    <h4 >Contact Us</h4>
    
    
    
    <div className='ecell__footer-contactus-address'>
      <p>Indian Institute of Technology
          (Banaras Hindu University)
          Varanasi, India
          PIN: 221005</p>
    </div>
   <div className='ecell__footer-contactus-email'>
   <p> <HiMail></HiMail> Mail us @ <a>ecell@iitbhu.ac.in</a></p>
   </div>
   <div className='ecell__footer-contactus-phone'>
   <p><HiPhone></HiPhone> +91 9587887413</p>
   </div>


    </div>

    <div className='ecell__footer-important'>
        <h4>Important</h4>
       <div className='ecell__footer-important-maindiv'>
       <div className='ecell__footer-important-div1'>
        <p><a>Home</a></p>
        <p>Events</p>
        <p>Blogs</p>
        <p>Initiatives</p>
        <p>Gallery</p>

       </div> 
        
        
       <div className='ecell__footer-important-div2'>
        <p>Who we are?</p>
        <p>How E-Cell works</p>
        <p>Meet the team</p>
        <p>I-3 F</p>
        <p>Contact Us</p>

       </div> 

       </div>
       
       
    

    </div>

    <div className='ecell__footer-subscribe'>
        <h4>E-Cell IIT (BHU) Varanasi's Weekly Newsletter</h4>

        <div className='ecell__footer-subscribe-mail'>
          <input type="mail" placeHolder="email address"></input>
          <button className='ecell__footer-subscribe-btn' type='submit'>Subscribe</button>
        </div>
      </div>




    </div>

    <div className='ecell__foot-socialicons'>
      {/* <GrInstagram onMouseOver={handleOver('Instagram')} onMouseOut={handleOut('Instagram')} href="https://www.instagram.com/ecelliitbhu/"  className='Instagram'/>
      <BsFacebook onMouseOver={handleOver('Facebook')} onMouseOut={handleOut('Facebook')} href= "https://www.facebook.com/ecelliitvaranasi" className='Facebook'></BsFacebook>
      <BsLinkedin onMouseOver={handleOver('Linkedin')} onMouseOut={handleOut('Linkedin')} href="https://www.linkedin.com/company/ecelliitbhu/"  className='Linkedin'></BsLinkedin>
      <BsTwitter onMouseOver={handleOver('Twitter')} onMouseOut={handleOut('Twitter')} href= "https://twitter.com/ecelliitbhu" className='Twitter'></BsTwitter>
      <BsYoutube onMouseOver={handleOver('Youtube')} onMouseOut={handleOut('Youtube')} href= "https://www.youtube.com/channel/UCUme5nNmSKY1GiUBUhlAnOQ" className='Youtube'></BsYoutube>
      <FaDiscord onMouseOver={handleOver('Discord')} onMouseOut={handleOut('Discord')} href= "https://discord.com/invite/EPm5mfbCKP" className='Discord'></FaDiscord> */}
      
      <a className="Zoom" href="https://www.instagram.com/ecelliitbhu/"> <GrInstagram  className='Zoom'></GrInstagram></a>
      <a className="Zoom" href= "https://www.facebook.com/ecelliitvaranasi"><BsFacebook  className='Zoom'></BsFacebook></a>
      <a className="Zoom" href="https://www.linkedin.com/company/ecelliitbhu/"><BsLinkedin  className='Zoom'></BsLinkedin></a>
      <a className="Zoom" href= "https://twitter.com/ecelliitbhu"> <BsTwitter className='Zoom'></BsTwitter></a>
      <a className="Zoom" href= "https://www.youtube.com/channel/UCUme5nNmSKY1GiUBUhlAnOQ"><BsYoutube  className='Zoom'></BsYoutube></a>
      <a className="Zoom" href= "https://discord.com/invite/EPm5mfbCKP" > <FaDiscord className='Zoom'></FaDiscord></a>
      
  
    </div>
  </div>
    


  )
}

export default Footer