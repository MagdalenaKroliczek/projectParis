import React from 'react';
import '../App.css';
import { Button } from './ButtonNewPlace';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <h1>Adventure awaits</h1>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Discover new place 
                </Button>
            </div>
        </div>
    );
}

export default Hero;
