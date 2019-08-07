import React, {Component} from 'react';
import Slider from 'react-slick';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide_one from "../resources/images/14425012231.jpg";
import slide_two from "../resources/images/14425012232.jpg";
import slide_three from "../resources/images/14425012233.jpg";
import slide_four from "../resources/images/14425012234.jpg";
import slide_five from "../resources/images/14425012235.jpg";
import slide_six from "../resources/images/14425012236.jpg";
import slide_seven from "../resources/images/14425012237.jpg";
import slide_eight from "../resources/images/14425012238.jpg";
import slide_nine from "../resources/images/14425012239.jpg";
import slide_ten from "../resources/images/144250122310.jpg";
import slide_eleven from "../resources/images/1442501223.jpg";
import slide_twelve from "../resources/images/14425013031.jpg";
import slide_thirteen from "../resources/images/14425013032.jpg";
import slide_fourteen from "../resources/images/14425013033.jpg";
import {Grid, Paper} from '@material-ui/core/';


class AttractionsSlider extends Component {
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
            className="carrousel_wrapper_attractions"
            style={{    
                height: `650px`,
                //overflow: "hidden"
            }}
        >
            <Slider {...settings}>
                <div>
                Ayia Napa
                    <div className="carrousel_image"
                         style={{
                             background:`url(${slide_one})`,
                            height:  `600px`
                          
                         }}
                         >
                       
                    </div>
                </div>

                <div>
                Kyrenia Harbour 1
                    <div className="carrousel_image"
                         style={{
                             background:`url(${slide_two})`,
                             height: `600px`
                         }}
                         >
                    </div>
                </div>  

                <div>
                Kyrenia Harbour 2
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_four})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>
                <div>
                Kyrenia Sea View
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_three})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>

                <div>
                Kyrenia Walls
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_five})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>

                <div>
                Halan Soultan Larnaka
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_six})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>

                <div>
                Saint Lazaros Church In Larnaca
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_seven})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>

                <div>
                Military Traditional Fort
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_eight})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>
                <div>
                Ledra Street Nicosia BORDERS
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
                                background:`url(${slide_ten})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>
                <div>
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_eleven})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>
                <div>
                Paphos Aphrodite Birth Placa
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_twelve})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>
                <div>
                St Peter & Paul Church
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_thirteen})`,
                                height:  `600px`
                            }}
                            >
                    </div>
                </div>
                <div>
                Troodos Mountains - Safari - Wild life
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_fourteen})`,
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

export default AttractionsSlider;