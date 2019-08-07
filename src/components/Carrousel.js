import React from 'react';
import Slider from 'react-slick';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import slide_one from "../resources/images/5bcfac07-0808-4d27-bce5-8069c90e9d33_resized.jpg";
//import slide_two from "../resources/images/1443603138_resized.jpg";
import slide_three from "../resources/images/1443603140_resized.jpg";
import slide_four from "../resources/images/1442319221_resized.png";


const Carrousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div
            className="carrousel_wrapper"
            style={{    
                height: `${window.innerHeight}px`,
                overflow: "hidden"
            }}
        >
            <Slider {...settings}>
                <div>
                    <div className="carrousel_image"
                         style={{
                             background:`url(${slide_one})`,
                             height:  `${window.innerHeight}px`
                          
                         }}
                         >
                    </div>
                </div>

                {/* <div>
                    <div className="carrousel_image"
                         style={{
                             background:`url(${slide_two})`,
                             height: `${window.innerHeight}px`
                         }}
                         >
                    </div>
                </div> */}

                <div>
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_three})`,
                                height: `${window.innerHeight}px`
                            }}
                            >
                    </div>
                </div>
                <div>
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_four})`,
                                height: `${window.innerHeight}px`
                            }}
                            >
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carrousel;