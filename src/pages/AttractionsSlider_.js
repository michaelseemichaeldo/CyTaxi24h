import React from 'react';
import Slider from 'react-slick';
//import "~slick-carousel/slick/slick.css";
//import "~slick-carousel/slick/slick-theme.css";
import slide_one from "../resources/images/14425012231.jpg";
import slide_two from "../resources/images/14425012232.jpg";
import slide_three from "../resources/images/14425012233.jpg";
import slide_four from "../resources/images/1442501223(4).jpg";
import slide_five from "../resources/images/1442501223(5).jpg";
import slide_six from "../resources/images/1442501223(6).jpg";
import slide_seven from "../resources/images/1442501223(7).jpg";
import slide_eight from "../resources/images/1442501223(8).jpg";
import slide_nine from "../resources/images/1442501223(9).jpg";
import slide_ten from "../resources/images/1442501223(10).jpg";
import slide_eleven from "../resources/images/1442501223.jpg";
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
        slidesToScroll: 1,
        adaptiveHeight: true
    }

    return (
        
        <div className="highlight_wrapper">   
        {/* <div className="center_wrapper spaceTop">
            <h2>Attractions</h2>
            <h5> There are many attractions worth visiting in Cyprus: </h5>
        </div> */}
      
        <div
         
            className="carrousel_wrapper_attractions"
            style={{    
                height: `500px`, //`${window.innerHeight}px`
                overflow: "hidden",
                    height:  `700px`
                          

            }}
        >
   
            <Slider {...settings}>
                <div>
                    <h3>Attraction 1</h3>
                    <div className="carrousel_image"
                         style={{
                             background:`url(${slide_one})`,
                             height:  `500px`
                          
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
                             height: `500px`
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
                                height: `500px`
                            }}
                            >
                    </div>
                    Text 3
                </div>
            </Slider>
              
        </div>
                
        </div>
        
    );
};

export default Attractions;