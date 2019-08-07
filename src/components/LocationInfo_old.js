import React from 'react';
import icon_calendar from '../resources/images/icons/calendar.png';
import icon_location from '../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';
import Map from './Map';

const LocationInfo = () => {
    return (
        <div className="bck_white">

                    <Zoom duration="500" delay="50">
                        
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                               
                                <div className="vn_icon_square bck_grey"></div>
                                <div
                                    className="vn_icon"
                                    style={{
                                        background:`url(${icon_location})`
                                    }}
                                >
                                </div>

                                <div className="vn_title">
                                    <b>Address</b>
                                    <p>Kennedy Ave, Paralimni CY 5315, Cyprus</p>
                                    {/* <b>Phone</b>
                                    <p>00 35 79 958 1426</p>
                                    <b>Email</b> info@cytaxi24h.com */}
                                    <h4><i class="fas fa-envelope"></i> Email: <a href="mailto:info@cytaxi24h.com">info@cytaxi24h.com</a></h4> 
        <h4><i class="fas fa-phone"></i> Phone: 0035 79 958 1426</h4>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Map/>
                    </Zoom>

                </div>
   
    );
};

export default LocationInfo; 
