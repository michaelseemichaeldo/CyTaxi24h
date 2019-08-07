import React from 'react';
import icon_calendar from '../resources/images/icons/calendar.png';
import icon_location from '../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const styles = {
    General: {padding: 10, marginLeft:10,marginRight:10,marginTop:100,marginBottom:30, flexGrow:1, fontSize:18},
}
const Pricing = () => {
    return (
        <div style={styles.General}>
                    <h2 className="titles">Prices</h2>
                                    <div style={{height: '${window.height()}'}}>
                                    <br></br>
                                        <br></br>
                                        
                                        <p align="center"><b>Please contact us for pricing:</b>
                                        <br></br>  <br></br>
                                        <br></br>
                                        <br></br>
                                        
                                        <h4><i className="fas fa-envelope"></i> Email: <a href="mailto:info@cytaxi24h.com">info@cytaxi24h.com</a></h4> 
                                        <h4><i className="fas fa-phone"></i> Phone: 0035 79 958 1426</h4>
                                        <br></br>
                                        <br></br>
                                        <br></br>
                                        </p>
                                        </div>

        </div>
         
                     
       


              


   
    
    );
};

export default Pricing; 