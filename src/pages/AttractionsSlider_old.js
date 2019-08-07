import React from 'react';
import Slider from 'react-slick';

import slide_one from "../resources/images/cyprus-ancient-kourion.jpg";
import slide_two from "../resources/images/cyprus-larnaca-seafront-promenade.jpg";
import slide_three from "../resources/images/cyprus-salamis-ruins.jpg";


//import slide_one from "./slide_one.jpg";
//import slide_two from "./slide_two.jpg";
//import slide_three from "./slide_three.jpg";
//import slide_four from "../resources/images/1443603138.jpg";

const Attractions = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        
        <div className="highlight_wrapper">
        <div className="center_wrapper spaceTop">
            <h2>Attractions</h2>
            <h5> There are many attractions worth visiting in Cyprus: </h5>
        </div>
      

        <div
         
            className="carrousel_wrapper_attractions"
            style={{    
                height: `${window.innerHeight*.9}px`,
                overflow: "hidden"
            }}
        >
   
            <Slider {...settings}>
                <div>
                    <h3>Attraction 1</h3>
                    <div className="carrousel_image"
                         style={{
                             background:`url(${slide_one})`,
                             height:  `${window.innerHeight*.9}px`
                          
                         }}
                         >
                    </div>
                    <span>
                    Text1
                    </span>
                    
                </div>

                <div>
                <h3>Attraction 2</h3>
                    <div className="carrousel_image"
                         style={{
                             background:`url(${slide_two})`,
                             height: `${window.innerHeight*.9}px`
                         }}
                         >
                    </div>
                    <span>
                    Text2
                    </span>
                </div>

                <div>
                <h3>Attraction 3</h3>
                    <div className="carrousel_image"
                            style={{
                                background:`url(${slide_three})`,
                                height: `${window.innerHeight*.9}px`
                            }}
                            >
                    </div>
                    Text 3
                </div>
            </Slider>
                <span>
                    Text1
                </span>
        </div>
                
        </div>
        
    );
};

export default Attractions;