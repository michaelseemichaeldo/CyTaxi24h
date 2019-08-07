import React from 'react';

import icon_location from '../resources/images/icons/location.png';

const Location = () => {
    return (
        <div>
                <br></br>  
                <br></br> 
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.538464020497!2d34.0093113150932!3d35.05252778034563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDAzJzA5LjEiTiAzNMKwMDAnNDEuNCJF!5e1!3m2!1sde!2sus!4v1556025810731!5m2!1sde!2sus" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                //style="border:0" 
                allowFullScreen
                >
            </iframe>
  
            {/* <div className="location_tag">
                <div>Location</div>
            </div> */}
        </div>
    );
};

export default Location;