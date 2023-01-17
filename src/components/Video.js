import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'
import surfVideo from '../assets/surf.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={surfVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Vacater</h1>
                <p>May your home be filled with all the joys of the season.</p>
            <div>
                <Link to='/pricing' className='btn'>Pricing</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
            </div>
        </div>
    )
}

export default Video