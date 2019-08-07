import React, {Component} from 'react';
import Slider from 'react-slick';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide_one from "../resources/images/5bcfac07-0808-4d27-bce5-8069c90e9d33_resized.jpg";
import slide_two from "../resources/images/1443603138_resized.jpg";
import slide_three from "../resources/images/1443603140_resized.jpg";
import slide_four from "../resources/images/1442319221_resized.png";
import slide_five from "../resources/images/1443603129.jpg";
import slide_six from "../resources/images/14436031405.jpg"
import slide_seven from "../resources/images/1443603138(1).jpg"
import slide_eight from "../resources/images/14436031382_resized.jpg"
import slide_nine from "../resources/images/1443603138.jpg"

import {Grid, Paper} from '@material-ui/core/';


class CarCarrousel2 extends Component {
    render(){
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        //autoplayspeed: 200,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 3,
        rows: 1,
        //slidesPerRow: 2,
        accessibility:true,
        centerMode: false,
        centerPadding: '10%',
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: true,
        mobileFirst: true,
        pauseOnHover:true,
        respondTo: 'min'
        //adaptiveHeight: true
        //responsive: 
    };

    return (
        
        <div
            className="carrousel_wrapper_cars"
            style={{    
                height: `600px`,
                //overflow: "hidden"
            }}
        >
            <Slider {...settings}>
                <div>
                    <div className="carrousel_image"
                         style={{
                             background:`url(${slide_one})`,
                            height:  `600px`
                          
                         }}
                         >
                    </div>
                </div>

                {/* <div>
                    <div className="carrousel_image"
                         style={{
                             background:`url(${slide_two})`,
                             height: `600px`
                         }}
                         >
                    </div>
                </div>  */}

                <div>
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_three})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>
                <div>
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_four})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>
                <div>
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_nine})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>
                <div>
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_eight})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>

                </Slider>
        </div>
    );
    }
};

export default CarCarrousel2;