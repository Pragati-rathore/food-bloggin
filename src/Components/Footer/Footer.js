import React from 'react';
import './Footer.css'; 
import logo from "../../asstes/foodTruck.png"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer >
      <div className="flex-container">
        <div className="box ">
            <img src={logo} alt='logo' className='imgLogo'/>
        </div>
        <div className="box" id="contactUs">
            <h3>Contact Us</h3>
            <p className='p'>
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
            </p>
            <p className='p'>example2020@gmail.com</p>
            <p className='p'>(904) 443-0343</p>
        </div>
        <div className="box" id='more'>
        <h3>More</h3>
            <p className='p'>
           About </p>
            <p className='p'>Product</p>
            <p className='p'>Career</p>
            <p className='p'>Contact Us</p>
        </div>
        <div className="box" id="flexBox">
            <div>
            <h3 id="social">Social Link</h3>
        <div className='social-icons' >
      
      <a href="https://www.instagram.com">
        <FaInstagram size={window.innerWidth <= 480 ? 13 : 20}  color='#0E2368'/>
      </a>
      <a href="https://www.twitter.com">
        <FaTwitter size={window.innerWidth <= 480 ? 13 : 20}  color='#0E2368'  spacing={10}/>
      </a>
      <a href="https://www.facebook.com">
        <FaFacebook size={window.innerWidth <= 480 ? 13 : 20}  color='#0E2368'/>
      </a>
     
    </div>
            </div>
        
    <p className='p' id="Food" >© 2022 Food Truck Example </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
