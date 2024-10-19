import React from 'react'
import "./header.css"
import Kandaidea from "../../../assets/icons/Kandaidea.svg"
import menuButton from "../../../assets/icons/menu_button.svg"


const Header = () => {
  return (
    <div className='home-header'>
        <div className="header-container">
            <div className='header-logo'>
                <button>
                    <img src={Kandaidea} alt='kandaidea'/>
                </button>
            </div>
            <div className='header-language'>
                <p>choose language:</p>
                <p className='header-language-en'> En</p>
                <p> /Fa</p>
                <button className='header-menu-button'>
                    <img src={menuButton} alt='menu-button'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Header