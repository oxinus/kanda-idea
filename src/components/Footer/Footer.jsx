import React from 'react'
import './footer.css'
import Logo from '../../assets/icons/second-logo.svg'
import Arrow from '../../assets/icons/arrows_up.png'
import Aparat from '../../assets/icons/aparat.svg'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-info'>
            <img src={Arrow} alt="arrow-up" />
            <div className='industries-container'>
                <h2>INDUSTRIES</h2>
                <div className='industries-body'>
                    <a href="#">Maritime</a>
                    <a href="#">Oil & Gas</a>
                    <a href="#">Telecommunication</a>
                    <a href="#">Agriculture</a>
                    <a href="#">Roads & Cities</a>
                    <a href="#">IT Infrastructure</a>
                </div>
            </div>
            <div className='services-container'>
                <h2>SERVICES</h2>
                <div className='services-body'>
                    <a href="#">GIS &amp; Geomatic</a>
                    <a href="#">Data Providing</a>
                    <a href="#">Data Engineering</a>
                    <a href="#">Engineering Design</a>
                </div>
            </div>
            <div className='cooperation-container'>
                <h2>COOPERATION</h2>
                <div className='cooperation-body'>
                <a href="/Contact.aspx">Contact Us</a>
                <a href="/EN/About">About Kanda Idea</a>
                <a href="https://www.kandaidea.com/career/">Get Job</a>
                <br />
                <p>Change : <br />Language</p>
                <div className='cooperation-language'>
                    <p>Fa  /</p>
                    <p> En</p>
                </div>
                </div>
            </div>
            <div className='logo-container'>
                <img src={Logo} alt="logo" />
            </div>
        </div>
        
        <div className='footer-contact'>
            <div className='contact-container'>
            <a href="#">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="#">
                <i className="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank">
                <img src={Aparat} alt='aparat'/>
            </a>
            <button>media center</button>
            </div>

            <div className='footer-copyRight'>   
            ©Copyright 2020. All Rights Reserved.
            </div>
        </div>
    </div>
  )
}
