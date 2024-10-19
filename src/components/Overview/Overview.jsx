import React from 'react'
import './overview.css'
import { useState, useEffect } from 'react'
import arrowDown from '../../assets/icons/arrow_down.svg'
import overviewLogo from '../../assets/icons/overview.svg'

const Overview = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <div className='overview-container'>
        <img src={arrowDown} alt="arrow-down" className='overview-arrow' />
        <div className='overview-body'>
          <div className='overview-title'>
              <p>OVERVIEW</p>
              <br />
              <p>THE CONFLUENCE OF <br /> ENGINEERING & CREATIVITY</p>
              <br />
              <p>
                  Kanda Idea is a leading Iranian company with a long-term successful experience in
                  providing technology-based engineering, monitoring (supervising), and management
                  services in mega-projects, enterprises, and the public sector
              </p>
          </div>
          <div className='overview-logo'>
            <img src={overviewLogo} alt="overview-logo" />
          </div>
        </div>
        <div className='overview-footer'>
          {data?.map (item => (
            <div key={item.number} className='overview-item'>
              <h3 >{item.number}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Overview