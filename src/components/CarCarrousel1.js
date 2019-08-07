
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide_one from "../resources/images/5bcfac07-0808-4d27-bce5-8069c90e9d33_resized.jpg";
//import slide_two from "../resources/images/1443603138_resized.jpg";
import slide_three from "../resources/images/1443603140_resized.jpg";
import slide_four from "../resources/images/1442319221_resized.png";
import slide_five from "../resources/images/1443603129.jpg";
import slide_six from "../resources/images/14436031405.jpg"
import slide_seven from "../resources/images/1443603138(1).jpg"
import slide_eight from "../resources/images/1443603138(2).jpg"
import slide_nine from "../resources/images/1443603138.jpg"

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class CarCarrousel2 extends Component {
    render() {
        return (
            <div alignItem="center">
            <Carousel autoPlay infiniteLoop interval={2500} transitionTime={350} dynamicHeight={true} showStatus={false} >
                <div>
                    <img src={slide_one} />
                    {/* <p className="legend"></p> */}
                </div>
                <div>
                    <img src={slide_three} />
 
                </div>
                <div>
                    <img src={slide_four}/>
            
                </div>

                <div>
                    <img src={slide_five} />
       
                </div>
                <div>
                    <img src={slide_six} />
         
                </div>
                <div>
                    <img src={slide_seven} />
             
                </div>
                <div>
                    <img src={slide_eight} />
      
                </div>
                <div>
                    <img src={slide_nine} />
  
                </div>
            </Carousel>
            </div>
        );
    }
};
 
export default CarCarrousel2;