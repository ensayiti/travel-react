import React from 'react'
import './TrainingStyles.css'
import {Link} from 'react-router-dom'
import Holiday from '../assets/holiday.jpg'
import Hola from '../assets/hola.jpg'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Through training is a necessity when traveling to joy</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Holiday} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Hola} className='img' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Training