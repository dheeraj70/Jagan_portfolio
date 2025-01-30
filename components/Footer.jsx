import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <div className='footer'>
      <div className="footer-l">
        <img className='footer_img' src="/foot_logo.png" alt="" />
      </div>
      <div className="foot_v"></div>
      <div className="footer-r">
        <p>Call / Whatsapp For Consulation : 9030446570</p>
        <p>Address: Main Road Madinaguda, Miyapur, Hyderabad, Telangana 500049</p>
      </div>
    </div>
    <div className="footer-d">
        <p>© 2025 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer