import React from 'react'
import './PricingStyles.css'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Basic -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$38</p>
                    <p>- 12 Hours -</p>
                    <p>- Private Tour -</p>
                    <p>- Beach -</p>
                    <p>- Tour: Boat -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Suite -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$75</p>
                    <p>- 2 Days -</p>
                    <p>- Private Tour -</p>
                    <p>- Nature & Wildlife -</p>
                    <p>- Tour: Boat -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Executive -</h3>
                    <span className='bar'></span>
                    <p className='btc'>$138</p>
                    <p>- 10 Days -</p>
                    <p>- Private Tour -</p>
                    <p>- Nature & Wildlife' -</p>
                    <p>- Spiritual -</p>
                    <Link to='/contact' className='btn'>Book</Link>
                </div>
            </div>
        </div>
    )
}

export default Pricing