import React from 'react';
import { Zoom } from 'react-slideshow-image';
import slide_one from "../resources/images/14436031402.jpg";
import slide_two from "../resources/images/1443603138.jpg";
import slide_three from "../resources/images/14436031403.jpg";

const images = [
    {slide_one},
    {slide_two},
    {slide_three}
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

const AttractionsSlideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    )
}

export default AttractionsSlideshow;