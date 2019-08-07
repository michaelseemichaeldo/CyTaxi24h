import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import img_about from "../resources/images/about.png";
import {Grid, Paper} from '@material-ui/core/';

export default class About extends Component {
    render() {
    const styles = {
        Paper: {padding: 10, marginLeft:30,marginRight:30,marginTop:100,marginBottom:30, flexGrow:1, fontSize:18},
   
  
        }
    return (
<div>


     <Fade>
        <Grid 
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >   
                <Grid item xs={12}> 
                <Paper style={styles.Paper}>
                            <h2 className="titles">About</h2>
                        <p>
                                    <h3 className="About" >Safety Taxi founded by Mr Savvas Sabinzikis</h3>

                                    <h4 className="About" >365 days per year , 24 Hours service</h4>

                                    <blockquote >Safety Taxi was founded by myself, Mr Savvas Sabinzikis, in 1990 in the Greek part of Cyprus. It is officially registered with the Cypriot Department of Road Transport.

                                    What was the beginning of the Taxi company?

                                    I started to work as a taxi driver in another company and after I gained a lot of experience after several years i created my own business. I upgraded the services by providing a Minibus and Limousine for weddings.

                                    Also we are officially authorised and fully insured to transfer people to the Turkish area and return as well to their desirable destination.

                                    All this thanks to my costumers that helped me to promote the company and still are promoting.

                                    </blockquote>
                                    <Grid>
                                    <Paper style={styles.Paper}>
                                    <span className="About" >
                                        <img src={img_about}  ></img>
                                    </span>
                                    </Paper>

                                    </Grid>
                        </p>
                    </Paper>
                </Grid>
        </Grid>
        </Fade>
            <br></br>      
            <br></br>
        </div>
    )
}
}
