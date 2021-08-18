import React from 'react';
import {Button} from './Button';
import './HeroSection.css';
import '../App.css';
// import videos from "../videos/video-1.mp4";  WHAT A BAD WAY THIS IS 




function HeroSection() {
    return (
        <div className ="hero-container">
            <video src={require("../assets/videos/video-1.mp4").default}  autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    >
                        GET STARTED
                    </Button>
                <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                    Watch Trailer <i className='far fa-play-circle'/>
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
