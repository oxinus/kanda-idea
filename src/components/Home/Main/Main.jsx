import React, { useEffect, useState } from 'react';
import mainLogo from '../../../assets/icons/main-Logo.svg'
import serviceLogo from '../../../assets/icons/services-w.svg'
import rdLogo from '../../../assets/icons/R&D-ow.svg'
import numberLogo from '../../../assets/icons/8_w.svg'
import Rec from '../../../assets/icons/rec_w_1.svg'
import Arrow from '../../../assets/icons/arrow_d.svg'
import './main.css'

const 
Main = () => {
    
    const [counter, setCounter] = useState(0)
    const [fadeOut, setfadeOut] = useState(false)
    const [fadeIn, setfadeIn] = useState(false)

    
    const sliderItem = [  
        {id : 0, src : rdLogo, text : "RESEARCH & DEVELOPMENT" },
        {id : 1, src : serviceLogo, text : "SERVICES & SOLUTIONS"}
    ]

    // set timer 5 sec to switch slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

        // set time out for adding and removing fade in, fade out style 
          useEffect (() => {
        setfadeOut(true)
        setfadeIn(false)
        setTimeout(() => {
            setfadeOut(false)
            setfadeIn(true)
        }, 800)
      }, [counter])


  return (
    <div className='home-main'>

        <div className='main-logo'>
            <img src={mainLogo} alt="main-logo" />
            <p>CREATIVE<br /> ENGINEERING<br /> EXPERIENCE</p>
        </div>

        <div className='main-slider'>
            <div className={`slider-top ${fadeIn ? "fade-in" : ""} ${fadeOut ? "fade-out" :""}`}>

                {/* initial counter is 0 and 0%2 equals 0 so in the false state in the conditional rendering mean after ":",
                 we should declare slide 0 is defined before. in the true state of conditional rendering mean after "?" 
                 the after the counter increased 1 the counter % 2 equals 1 snd the second slide shows up*/}
                <img src={counter %2 ? sliderItem[1].src : sliderItem[0].src} alt="r&d logo" />
                <p>{counter %2 ? sliderItem[1].text : sliderItem[0].text}</p>
            </div>
            <hr />
            <div className={`slider-bottom ${fadeIn ? "fade-in" : ""} ${fadeOut ? "fade-out" : ""}`}>
                <img src={counter %2 ? sliderItem[0].src : sliderItem[1].src} alt="service logo" />
                <div>
                    <h1>{counter %2 ? sliderItem[0].text : sliderItem[1].text}</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vel egestas dolor, nec dignissim metus.
                        Donec augue elit, rhoncus ac sodales id, porttitor vitae est.
                        Donec laoreet rutrum libero sed pharetra.
                        Donec vel egestas dolor, nec dignissim metus. Donec augue elit,
                        rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.
                        Duis a arcu convallis, gravida purus eget, mollis diam.
                    </p>
                </div>
            </div>
            <div className='slider-number'>
                <img src={Rec} alt="rec logo" />
                <img src={numberLogo} alt="number-logo" />
                <button>
                    <img src={Arrow} alt="arrow logo" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Main