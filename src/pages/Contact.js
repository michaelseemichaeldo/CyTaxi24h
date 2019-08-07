import React from 'react';
import ReactContactForm from 'react-mail-form';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import LocationInfo from '../components/LocationInfo';

import '../resources/styles.css';

const styles = {
  General: {padding: 10, marginLeft:10,marginRight:10,marginTop:100,marginBottom:30, flexGrow:1, fontSize:18},

}

  

const Contact = () => {

  return(
 
        <div style={styles.General} >
    <h2 className="titles">Contact</h2>   
    <br></br>    <br></br>  
    <LocationInfo/>
 </div>
  );
};

export default Contact;
