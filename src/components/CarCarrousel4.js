import React, {Component} from 'react'
import CarouselSlider from 'react-carousel-slider';
import slide_one from "../resources/images/5bcfac07-0808-4d27-bce5-8069c90e9d33_resized.jpg";
//import slide_two from "../resources/images/1443603138_resized.jpg";
import slide_three from "../resources/images/1443603140_resized.jpg";
import slide_four from "../resources/images/1442319221_resized.png";
import slide_five from "../resources/images/1443603129.jpg";
import slide_six from "../resources/images/14436031405.jpg";
import slide_seven from "../resources/images/1443603138(1).jpg";
import slide_eight from "../resources/images/1443603138(2).jpg";
import slide_nine from "../resources/images/1443603138.jpg";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class CarCarrousel4 extends Component {
    render() {
    
        let data = [
            {
              imgSrc:
              "../resources/images/5bcfac07-0808-4d27-bce5-8069c90e9d33_resized.jpg",
              des1: "Black",
              des2: "White"
            },
            {
              imgSrc:
                "https://c.pxhere.com/photos/4a/92/architecture_skyscraper_glass_facades_modern_facade_sky_building_d_sseldorf-1289274.jpg!d",
              des1: "Black",
              des2: "White"
            },
            {
              imgSrc:
                "https://c.pxhere.com/photos/01/00/architecture_skyscraper_glass_facades_modern_facade_sky_building_d_sseldorf-1191017.jpg!d",
              des1: "Black",
              des2: "White"
            }
          ];
                    
            let sliderBoxStyle = {
                height: "250px",
                width: "300px",
                background: "transparent",
                border: "1px solid #e1e4e8"
            };
            
            let itemsStyle = {
                height: "80%",
                padding: "0px",
                background: "transparent",
                border: "1px solid #e1e4e8",
                borderRadius: "2px"
            };
            
            let textBoxStyle = {
                width: "60%",
                background: "rgba(155, 108, 27, 0.5)",
                top: "80%",
                textAlign: "right",
                color: "#ffffff"
            };
            
            let textBoxStyle2 = {
                width: "30%",
                top: "30%",
                color: "#ffffff",
                marginRight: "0%"
            };
            // margin to tune the textbox
            let buttonSetting = {
                placeOn: "middle-outside",
                style: {
                left: {
                    color: "#929393",
                    background: "transparent",
                    border: "1px solid #e1e4e8",
                    borderRadius: "50%"
                },
                right: {
                    color: "#929393",
                    background: "transparent",
                    border: "1px solid #e1e4e8",
                    borderRadius: "50%"
                }
                }
            };
            
            let dotsSetting = {
                placeOn: "top",
                style: {
                dotSize: "5px",
                currDotColor: "rgba(155, 108, 27, 0.5)",
                marginTop: "0px"
                }
            };
  
  let customSlideCpnts = data.map((item, index) => (
    <Link to={"/page" + index} key={index}>
      <img src={item.imgSrc} />
      <p style={textBoxStyle}>{item.des1}</p>
      <p style={textBoxStyle2}>{item.des2}</p>
    </Link>
  ));

        return <div style={{ width: "400px", margin: "0 auto", position: "relative" }}>
        <CarouselSlider
          slideCpnts={customSlideCpnts}
          manner={{ circular: false }}
          sliderBoxStyle={sliderBoxStyle}
          dotsSetting={dotsSetting}
          buttonSetting={buttonSetting}
          itemsStyle={itemsStyle}
        />
      </div>;
    }
}
export default CarCarrousel4;