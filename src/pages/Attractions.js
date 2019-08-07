import React from 'react';
import {Grid, Paper} from '@material-ui/core/';
import ImgMediaCard from "./ImgMediaCard";
import AttractionsSlider from "./AttractionsSlider";
import AttractionsSlider2 from "./AttractionsSlider2";

//import slide_one from "./slide_one.jpg";
//import slide_two from "./slide_two.jpg";
//import slide_three from "./slide_three.jpg";
//import slide_four from "../resources/images/1443603138.jpg";

const Attractions = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const styles = {
        General: {padding: 10, marginLeft:10,marginRight:10,marginTop:100,marginBottom:30, fontSize:18},
    }
    return (
        
        // <div style={styles.General} >
        //     <div >
        //         <h2 className="titles">Attractions</h2>
        //         <h4 align="center"> There are many attractions worth visiting in Cyprus: </h4>
        //     </div>
        //     <AttractionsSlider/>
        //     <ImgMediaCard/>
        
                
        // </div>
        <div>
  
        <div style={styles.General} >
            
        <h2 className="titles">Attractions</h2>
        <h4 align="center"> There are many attractions worth visiting in Cyprus: </h4>

                <Grid 
                    container
                    spacing={10}
                    direction="row"
                    alignItems="center"
                    justify="center"
                
                >    
                 
                    <Grid item xs={9}> 
                        <Paper  >
                                <AttractionsSlider2/>    
                        </Paper>
                    </Grid>
                    {/* <Grid item xs> 
                        <Paper >
                        <AttractionsSlider/>    
                        </Paper>
                    </Grid>
                    <Grid item xs> 
                        <Paper >
                        <ImgMediaCard/>    
                        </Paper>
                    </Grid> */}
                </Grid> 
        </div>
        </div>
        
    );
};

export default Attractions;