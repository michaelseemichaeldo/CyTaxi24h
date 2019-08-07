import React from 'react';

import ImgMediaCard from "./ImgMediaCard"

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
        General: {padding: 10, marginLeft:10,marginRight:10,marginTop:100,marginBottom:30, flexGrow:1, fontSize:18},
   
    }
    return (
        
        <div style={styles.General} >
            <div >
                <h2 className="titles">Attractions</h2>
                <h4 align="center"> There are many attractions worth visiting in Cyprus: </h4>
            </div>
        
            <ImgMediaCard/>
        
                
        </div>
        
    );
};

export default Attractions;