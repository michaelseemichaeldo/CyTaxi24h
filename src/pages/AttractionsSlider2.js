import React, {Component} from 'react';

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
import slide_eleven from "../resources/images/1442501223_resized.jpg";
import slide_twelve from "../resources/images/14425013031.jpg";
import slide_thirteen from "../resources/images/14425013032.jpg";
import slide_fourteen from "../resources/images/14425013033.jpg";
import {Grid, Paper} from '@material-ui/core/';


import { Carousel } from 'react-responsive-carousel';
 
class AttractionsSlider2 extends Component {
    render() {
        return (
            <div alignItem="center">
            <Carousel autoPlay infiniteLoop interval={2500} transitionTime={350} dynamicHeight={true} showStatus={false} >
                <div>
                    <img src={slide_one} />
                     <p className="legend">  Ayia Napa</p> 
                </div>
                <div>
                    <img src={slide_three} />
                    <p className="legend">Kyrenia Harbour 1</p> 
                </div>
                <div>
                    <img src={slide_four}/>
                    <p className="legend">Kyrenia Harbour 2</p> 
                </div>
                <p className="legend">Kyrenia Sea View</p> 
                <div>
                    <img src={slide_five} />
                    <p className="legend">Kyrenia Walls</p> 
                </div>
                <div>
                    <img src={slide_six} />
                    <p className="legend">Halan Soultan Larnaka</p> 
                </div>
                <div>
                    <img src={slide_seven} />
                    <p className="legend">   Saint Lazaros Church In Larnaca </p> 
                </div>
                <div>
                    <img src={slide_eight} />
                    <p className="legend"> Military Traditional Fort  </p> 
                </div>
                <div>
                    <img src={slide_nine} />
                    <p className="legend">    Ledra Street Nicosia BORDERS</p> 
                </div>
                <div>
                    <img src={slide_ten} />
                    <p className="legend">  </p> 
                </div>
                <div>
                    <img src={slide_eleven} />
                    <p className="legend">  </p> 
                </div>
                <div>
                    <img src={slide_twelve} />
                    <p className="legend">  Paphos Aphrodite Birth Placa</p> 
                </div>
            </Carousel>
            </div>
        );
    }
};
 
export default AttractionsSlider2;