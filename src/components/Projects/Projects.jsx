import React, { useEffect, useState } from 'react'
import "./projects.css"
import {images} from '../images/projectsImages'
import arrowDown from '../../assets/icons/arrow_down.svg'

const Projects = (props) => {

    let {direction} = props
    const [scrollStyle, setscrollStyle] = useState({})

    useEffect(() => {
        if (direction == "up") {
            setscrollStyle({right : 0, left : "auto"})
        } else if (direction == "down") {
            setscrollStyle({left : 0, right : "auto"})
        }
        else {}
    }, [direction])


    return (
        <div className='projects-container'>
            <img src={arrowDown} alt="arrow-down" />
            <div className={`project-create`} style = {scrollStyle}>
                <p>
                    we <br /> create
                </p>
            </div>
            <div className='projects-title'>
                <h2>our projects</h2>
                <p>discovering the next inspiring talks in industry</p>
            </div>
            <div className='projects-images'>
                {images.map(image => (
                    <div key={image.id} className={`item${image.id}`}>
                        <img src={image.src} alt={image.alt}/>
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default Projects