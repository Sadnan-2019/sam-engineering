import React, { useEffect, useState } from 'react';
import "./WhatsApp.css"
import { BiArrowToTop } from 'react-icons/bi';
 
import whatsapp from "../../assets/whatsapp.png"
const WhatsApp = () => {

     const [isVisible, setIsVisible] = useState(false);
     const gotoBtn = () => {
       window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
     };
     const listenToScroll = () => {
       let heightToHidden = 20;
       const winScroll =
         document.body.scrollTop || document.documentElement.scrollTop;
   
       if (winScroll > heightToHidden) {
         setIsVisible(true);
       } else {
         setIsVisible(false);
       }
     };
   
     useEffect(() => {
       window.addEventListener("scroll", listenToScroll);
       return () => window.removeEventListener("scroll", listenToScroll);
     }, []);
     return (
          <div>
                {isVisible && (
        <div>
         
           <a
              className="top-btn       whatsup  rounded-full   "
              href="https://wa.me/+8801767564737"
                // href="https://wa.me/+8801767564737"
              title="WHATSAPP CHAT"
            >
              {" "}
              <img className='  whatsup' src={whatsapp} alt=''/>
            </a>
        </div>
      )}
          </div>
     );
};

export default WhatsApp;