import React from 'react';
import CarCarrousel1 from './CarCarrousel1';
import CarCarrousel2 from './CarCarrousel2';
import CarCarrousel3 from './CarCarrousel3';
import CarCarrousel4 from './CarCarrousel4';
import './Featured.css';
import {Grid, Paper} from '@material-ui/core/';

const Featured = () => {
    
    // const styles = style => ({
    //     root: {
    //       flexGrow: 1,
    //     },
    //     paper: {
    //       height: 140,
    //       width: 100,
    //     }
    // });
  
    return (
        // <div style={{position: 'relative'}}>
        
        <div>
            <div>
                    <Grid 
                        container
                        spacing={10}
                        direction="row"
                        alignItems="center"
                        justify="center"
                     
                    >    
                        <Grid item xs> 
                            <Paper  >
                        
                            </Paper>
                        </Grid>
                        <Grid item xs={9}> 
                            <Paper className="size" >
                   
                                <CarCarrousel2/>   
                            </Paper>
                        </Grid>
                        <Grid item xs> 
                            <Paper >
                            
                            </Paper>
                        </Grid>
                    </Grid> 
            </div>
        </div>
    );
};

export default Featured;