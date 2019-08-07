import React, { Component } from 'react';
import {Grid, Paper} from '@material-ui/core/';
//import DemoCarrousel from './DemoCarousel';

export default class GeneralInfo extends Component {
  render() {
    const styles = {
      Paper: {padding: 10, marginLeft:50,marginRight:50,marginTop:20,marginBottom:30, flexGrow:1, fontSize:18},
      Paper2: {padding: 10, marginLeft:50,marginRight:50,marginTop:20,marginBottom:30, flexGrow:1, fontSize:18}

      }
    
    return (
      <div className="GeneralInfo">

      <Grid 
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
        >

        <Grid item>  
     
          <Paper style={styles.Paper}>
              
                      Safety Taxi -Minibus & Limo
                        <ul>
                            <li>24-Hours Open  / 365 days per year</li>
                            <li>AIRPORT TRANSFERS</li>
                            <li>Excursions & Tours</li>
                            <li>We also provide minibus & several kind of Limousines for YOUR SPECIAL WEDDING DAY !</li>
                            <li>Local and long transfers</li>
                            <li>Waiting during Flight delays.</li>
                            <li>Business Transfers (discreet & punctual journey to your destination)</li>
                            <li>Kennedy Avenue, 5315 Paralimni </li>
                        </ul>
                
    
                    <br></br>
                     No extra charge on:
                      <ul>
                          <li>Short Delays until 15min.</li>
                          <li>Changing the apointment.</li>
                          <li>For Hand bags.</li>
                          <li>Cancelling the tranfer.</li>
                          <li>Flight delays.</li>
                          <li>Special prices on trips and Airports</li>
                          <li>Seat belts in all vehicles & child (baby) seats (uppon request)</li>
                      </ul>
              
                </Paper>
            </Grid>
        <Grid item >
          <Paper style={styles.Paper2}>
              <p>All of our drivers speak English and Greek very well.
              The drivers are checked for a clean police record and valid driving license authorised from the Road Transport Department.
              We upgraded our license for safe transfers in the Turkish-Cypriot area as well as for tourist trips for both short and long destinations. 
              <br></br>
              <br></br>
              Reliable taxi service while the costumer pays us after arriving at the final destination!
              We also provide female drivers in case preferred by our female costumers.
              Our cars are fully air-conditioned and fully insured. </p>
              </Paper>
          </Grid>
             
      
       
      </Grid>
      <br></br>  <br></br>
      </div>
    )
  }
}
