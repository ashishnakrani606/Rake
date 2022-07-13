import React from 'react';
import "./footer.css";
import twitter from "../../Asset/img/twitter.svg";
import facebook from "../../Asset/img/facebook.svg";
import insta from "../../Asset/img/insta.svg";
import youtube from "../../Asset/img/youtube.svg";
import responsible from "../../Asset/img/responsible.svg";
import footerLogo from "../../Asset/img/footer-logo.svg";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
          <div className='footer-content'>
            <div className='logo-img'>
               <ul>
                <li>
                  <Link to='#' className='footer-logo' target="_blank">
                    <img src={footerLogo} alt=""/>
                  </Link>
                </li>
                <li>
                  <Link to='#' target="_blank">
                    <img src={responsible} alt=""/>
                  </Link>
                </li>
               </ul>
            </div>
            <p className='Community'>Community Social Links</p>
            <div className='social-link'>
                <a href='https://twitter.com/RakeCasino' rel="noopener noreferrer" target="_blank">
                  <img src={twitter} alt=""/>
                </a>
                <a href='https://www.facebook.com/Rakecom-105302332236034/' rel="noopener noreferrer" target="_blank">
                  <img src={facebook} alt=""/>
                </a>
                <a href='https://www.instagram.com/p/Cep-K_dO5AO/?igshid=YmMyMTA2M2Y=' rel="noopener noreferrer" target="_blank">
                  <img src={insta} alt=""/>
                </a>
                <a href='https://www.youtube.com/' rel="noopener noreferrer" target="_blank">
                  <img src={youtube} alt=""/>
                </a>
            </div>
            <p className='copyright-mobile' >© 2022 <a href='Rake.com' target="_blank">Rake.com</a> | All Rights Reserved.</p>
            <Link to='#' className='contact-us'>Contact Us</Link>
           <div className='mail-link'>
             <a href='mailto:business@rake.com' target="_blank" rel="noopener noreferrer" >business@rake.com</a>
             <a href='mailto:shop@rake.com' target="_blank" rel="noopener noreferrer">shop@rake.com</a>
             <a href='mailto:contact@rake.com' target="_blank" rel="noopener noreferrer">contact@rake.com</a>
           </div>
           <div className='copyright'>
              <p className='copyright-disk' >© 2022 <a href='Rake.com' target="_blank">Rake.com</a> | All Rights Reserved.</p>
              <p className='copyright-content'>Rake.com is owned and operated by Elixir Tech N.V. registered address: Zuikertuintjeweg Z/N (Zuikertuin Tower) Curaçao. Rake is authorized and regulated by the Government of Curacao.</p>
           </div>
          </div>
      </div>
    </div>
  )
}

export default Footer