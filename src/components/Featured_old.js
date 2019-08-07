import React from 'react';
import Carrousel from './Carrousel';
import DemoCarrousel from './DemoCarousel';
import './Featured.css';

const Featured = () => {
    return (
        <div style={{position: 'relative'}}>

        <div className="slide-container">
            <DemoCarrousel/>
            </div>

        </div>
    );
};

export default Featured;