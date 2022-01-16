import React from 'react'
import '../styles/Header.css'
function Home() {
    return (
        <div className='content'>
            <p className='im'>I'm</p>
            <p className='name'>Addala Bharathi Devi</p>
            <p className='goal'>Wanna become a <span className='goalName'>Full stack developer</span></p>
            <p className='bright'>Bright side of my <span className='brightSpan'>LIFE</span></p>
            <a href='#' className='btn'>Contact me</a>
        </div>
    )
}

export default Home
