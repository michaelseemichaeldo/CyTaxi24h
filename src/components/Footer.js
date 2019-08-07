import React from 'react';
import Fade from 'react-reveal/Fade';
import '../resources/styles.css';

const Footer = () => {
  return (
    <footer className="bck_bluegradient">
      <Fade delay={500}>
     
        <div className="footer_copyright">
          <h3>Contact Us:</h3>
          <h4><i className="fas fa-envelope"></i> Email: <a href="mailto:info@cytaxi24h.com">info@cytaxi24h.com</a></h4> 
          <h4><i className="fas fa-phone"></i> Phone: 0035 79 958 1426</h4>
          <a href="https://www.facebook.com/CY-Taxi-24h-393476384569804/?modal=admin_todo_tour"><i className="fab fa-facebook-f fa-2x"></i></a>
          {/* <a href="https://twitter.com/#"><i class="fab fa-twitter fa-2x"></i></a> */}
          <br></br>
          <br></br>
          <span>
          &copy; 2019. All rights reserved
          </span>
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
    