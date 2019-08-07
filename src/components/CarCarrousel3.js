import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import slide_one from "../resources/images/5bcfac07-0808-4d27-bce5-8069c90e9d33_resized.jpg";
//import slide_two from "../resources/images/1443603138_resized.jpg";
import slide_three from "../resources/images/1443603140_resized.jpg";
import slide_four from "../resources/images/1442319221_resized.png";
import slide_five from "../resources/images/1443603129.jpg";
import slide_six from "../resources/images/14436031405.jpg";
import slide_seven from "../resources/images/1443603138(1).jpg";
import slide_eight from "../resources/images/1443603138(2).jpg";
import slide_nine from "../resources/images/1443603138.jpg";
import "react-alice-carousel/lib/alice-carousel.css";
 
class CarCarrousel3 extends Component {

    responsive = {
        0: { items: 1 },
        1024: { items: 1 },
      }
  render(){
    const handleOnDragStart = e => e.preventDefault()
    return (
        <AliceCarousel 
            mouseDragEnabled 
            dotsDisabled={false}
            buttonsDisabled={false}
            >
            <img src={slide_one} onDragStart={handleOnDragStart} className="carrousel_wrapper_cars" />
            <img src={slide_three}  onDragStart={handleOnDragStart} className="carrousel_wrapper_cars" />
            <img src={slide_four} onDragStart={handleOnDragStart} className="carrousel_wrapper_cars" />
            <img src={slide_five} onDragStart={handleOnDragStart} className="carrousel_wrapper_cars" />
            <img src={slide_six} onDragStart={handleOnDragStart} className="carrousel_wrapper_cars" />
        </AliceCarousel>
    )
 }
}

export default CarCarrousel3;